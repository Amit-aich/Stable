import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import ContactIcon from "../static/ContactIcon";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <MainLayout>
        <div className="my-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:mx-12">
            <div>
              <ContactIcon />
            </div>

            <div className="grid justify-items-center my-8">
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-semibold text-orange-500 dark:text-slate-500">Get in Touch</div>
                <div className="px-12 text-xl mb-2 text-gray-700 dark:text-gray-300">
                STABLE is a self meditation web application which will help the user to 
                    keep themselves mentally fit during the hard times of their life, an will help them to 
                    take the right decision.
                </div>
                <Link
                  to="/stable"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1  gap-6 place-items-center ">

          <div className="flex flex-col justify-center p-4 mb-12 w-[60%] text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tiny Coders
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Full Stack Web Developer.
            </p>
            <a rel="noreferrer" className="flex flex-col items-center" href="https://www.linkedin.com/in/amit-kumar-aich-a4a6051b7/" target="_blank">
              <img
                src="https://www.rhsb.com/wp-content/uploads/2020/05/linkedin-1.png"
                alt="Buy Me A Coffee" width="160px"
              />
            </a>
            </div>
        </div>

      </MainLayout>
    </>
  );
}
