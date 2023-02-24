import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import HomeYoga from '../static/HomeYoga'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <>
        <MainLayout>

        <div className='my-12 text-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:mx-12'>

            <div>
              <HomeYoga />
            </div>

              <div className='grid justify-items-center my-8'>
                <div className='flex flex-col items-center justify-center' >
                <div className='text-4xl font-semibold text-orange-500 dark:text-slate-500'>About Us</div>
                  <div className='px-12 text-xl mb-2  text-gray-700 dark:text-gray-300'>
                    STABLE is a self meditation web application which will help the user to 
                    keep themselves mentally fit during the hard times of their life, an will help them to 
                    take the right decision.
                  </div>
                  <Link to="/contact" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Get in Touch
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>




        </MainLayout>
    </>
  )
}
