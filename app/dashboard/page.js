"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import { updateProfile, fetchuser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from 'react-toastify'

const Dashboard = () => {
  const { data: session, status, update } = useSession()
  const [form, setform] = useState({})
  const router = useRouter()



  const getData = async () => {
    if (session && session.user) {
      let u = await fetchuser(session.user.name)
      setform(u)
    }
  }

  useEffect(() => {

    if (status === 'unauthenticated') {
      router.push('/login')
    }
    else if (status === 'authenticated' && session) {
      getData()
    }
    else if (!session) {
      router.push('/login')
    }


  }, [status, router, session])



  if (status === 'loading') {
    return <div className='items-center flex flex-col m-11 text-center justify-center'>
      < img width={80} src="teacup.gif" alt="logo" />
      Loading...
    </div>
  }

  const handleChange = (e) => {

    setform({ ...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name)
            toast.success('🦄 updateing completed!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
  }



  return ( <>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />
    <div className='items-center flex flex-col m-4 text-center justify-center min-h-screen text-white'>
      <h1 className='text-center items-center text-2xl mb-6'>Welcome to your Dashboard</h1>
      <form action={handleSubmit} className='dashboard-form w-[60%] my-1  mx-12 bg-gray-800 px-7 rounded-lg shadow-lg'>
        <div className='form-group my-4'>
          <label htmlFor='name' className='block text-left mb-2'>Name:</label>
          <input value={form.name ? form.name : ""} type='text' id='name' onChange={handleChange} name='name' className='w-full p-2 rounded bg-gray-700 text-white' required />
        </div>
        <div className='form-group my-4'>
          <label htmlFor='email' className='block text-left mb-2'>Email:</label>
          <input value={form.email ? form.email : ""} type='email' id='email' name='email' onChange={handleChange} className='w-full p-2 rounded bg-gray-700 text-white' required />
        </div>
        
        <div className='form-group my-4'>
          <label htmlFor='profilepic' className='block text-left mb-2'>Profile Picture:</label>
          <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type='text' id='profilepic' name='profilepic' className='w-full p-2 rounded bg-gray-700 text-white' />
        </div>
        <div className='form-group my-4'>
          <label htmlFor='coverpic' className='block text-left mb-2'>Banner Picture:</label>
          <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type='text' id='coverpic' name='coverpic' className='w-full p-2 rounded bg-gray-700 text-white' />
        </div>
        <div className='form-group my-4'>
          <label htmlFor='razorpayid' className='block text-left mb-2'>Razorpay id:</label>
          <input type='password' value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} id='razorpayid' name='razorpayid' className='w-full p-2 rounded bg-gray-700 text-white' />
        </div>
        <div className='form-group my-4'>
          <label htmlFor='razorpaysecret' className='block text-left mb-2'>Razorpay Secret:</label>
          <input type='password' value={form.razorpaysecret ? form.razorpaysecret : ""} id='razorpaysecret' name='razorpaysecret' onChange={handleChange} className='w-full p-2 rounded bg-gray-700 text-white' />
        </div>
        <button type='submit' className='submit-button w-full mb-8 p-2 mt-4 bg-blue-600 rounded hover:bg-blue-700'>Submit</button>
      </form>
    </div>
    </>
  )

}

export default Dashboard
