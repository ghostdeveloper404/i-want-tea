"use client"
import React from 'react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Github from 'next-auth/providers/github'
import { useState } from 'react'
import dashboard from '@/app/Dashboard/page'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false) 

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className='bg-black justify-around md:h-20 px-4 flex-col md:flex-row items-center text-white flex'>
      
        <Link href={"/"} className="logo font-bold text-center justify-center items-center text-lg">
        < img width={20} src="teacup.gif" alt="logo" />
        <span className='text-xl y-3 md:my-0 md:text-base'> I-want-tea</span>
        </Link>
      
     

      <div className='relative space-between items-center flex nowrap '>
        {session && <>
          <button id="dropdownDefaultButton" onBlur={() =>{setTimeout(() => setShowdropdown(false), 1000)}} onClick={() => setShowdropdown(!showdropdown)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 mx-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>


          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px] bg-white divide-y divide-gray-100   rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
              <Link href="/Dashboard" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} legacyBehavior>
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page</a>
                </Link>
              </li>
              
              <li>
              <a onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">Sign out</a>
              </li>
            </ul>
          </div>
        </>
        }
        
        {session &&
          <button onClick={() => { signOut() }} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
        }
        {!session &&
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar