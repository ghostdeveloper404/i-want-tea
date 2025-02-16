"use client"
import React, { useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, initiate } from '@/actions/useractions'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { fetchuser } from '@/actions/useractions'
import { useRouter } from 'next/navigation'
import { useSearchParams} from 'next/navigation'
import { ToastContainer ,toast } from 'react-toastify';

import { Bounce } from 'react-toastify';




const PaymentPage = ({ username }) => {
    const { data: session, status } = useSession()
    const router = useRouter()
    const SearchParams = useSearchParams()

    const [paymentform, setpaymentform] = useState({
        name: '',
        message: '',
        amount: ''
    })

    useEffect(() => {
       

        getData()
    }, [])

    useEffect(() => {
         if(SearchParams.get("paymentdone") == "true" ){
            toast(' Payment completed!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            } 
           router.push(`/${username}`)
        
        } , [] )
        


    const [currentUser, setcurrentUser] = useState({})
    const [Payments, setPayments] = useState([])
    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })

    }
    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(JSON.parse(JSON.stringify(u)))
        let dbpayments = await fetchpayments(username)
        setPayments(JSON.parse(JSON.stringify(dbpayments)))
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "I want tea", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);

        rzp1.open();



    }
    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-48 md:h-[350] ' src={currentUser.coverpic} alt="coverimage" />
                <div className='absolute size-36 overflow-hidden -bottom-20 right-[46%] border-2 border-white rounded-full'>
                    <img className='rounded-full object-cover' width={160} height={160}
                        src={currentUser.profilepic} alt="profilepic" />
                </div>
            </div>
            <div className="info  flex flex-col  gap-1 justify-center items-center my-24">
                <span className='font-bold text-lg'>{currentUser.name}</span>
                <div className='text-slate-400'>let help him get a chai </div>
                <div className='text-slate-400' >{Payments.length} Payments . ₹{Payments.reduce((a,b) => a+b.amount,0)} has raised </div>

                <div className="payment flex flex-col md:flex-row gap-3 mt-11 w-[80%]">
                    <div className="supporters w-full  md:w-1/2 text-white  bg-slate-900 p-10">
                        <h2 className='text-2xl  font-bold my-5'>Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {Payments.length === 0 && <li>No payments yet</li>}
                            {Payments.map((p, i) => {
                                return <li key={p._id} className='my-4 flex gap-2 items-center'>
                                    <img src="person.svg" width={25} alt="profilepic" />
                                    <span>
                                        {p.name}<span className='font-bold'> ₹{p.amount} </span>with a message "{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="makepayment w-full md:w-1/2 bg-slate-900 p-10 text-white">
                        <h2 className='text-bold my-5 text-xl '>Make a payment</h2>
                        <div className="flex gap-2 flex-col">
                            <div>
                                <input type="text" onChange={handleChange} value={paymentform.name || ""} name='name' className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Name' />
                            </div>
                            <input type="text" onChange={handleChange} value={paymentform.message || ""} name='message' className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Message' />
                            <input type="text" onChange={handleChange} value={paymentform.amount || ""} name='amount' className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Amount' />
                            <div className="text-center">
                                <button type="button" disabled={paymentform.name?.length < 2 || paymentform.message?.length < 5 || paymentform.amount.length < 1 } onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className=" w-28 text-white   bg-gradient-to-br  disabled:from-purple-200 from-purple-600  to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row  gap-2 my-4 mx-5">
                            <button disabled={paymentform.name?.length < 2 || paymentform.message?.length < 5} className='bg-slate-800 p-3 rounded-lg disabled=bg-slate-600  ' onClick={() => pay(1000)}> Pay ₹10</button>
                            <button disabled={paymentform.name?.length < 2 || paymentform.message?.length < 5} className='bg-slate-800 p-3 rounded-lg disabled=bg-slate-600 ' onClick={() => pay(2000)}> Pay ₹20</button>
                            <button disabled={paymentform.name?.length < 2 || paymentform.message?.length < 5} className='bg-slate-800 p-3 rounded-lg disabled=bg-slate-600 ' onClick={() => pay(3000)}> Pay ₹30</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
