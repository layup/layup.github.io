import React, { useState } from "react";

import CheckmarkImage from '../../../images/icons/checkmark.png'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/5d40a290-32e5-11ed-a128-91006467e20b"

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
  
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
  
    };

    const DefaultForm = () => {
        return (
            <div className="flex flex-col-reverse 2xl:flex-row place-content-center rounded-lg p-5 md:w-8/12">
                <form 
                    className="flex flex-col basis-2/5 md:px-16 2xl:px-0 2xl:w-6/12 "
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <div className="flex flex-col p-4">
                        <label htmlFor="name">
                            <p className="font-medium">Your Name (Required) </p>
                        </label>
                        <input 
                            type="text" 
                            name='name'
                            className="p-2" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="flex flex-col p-4">
                        <label>
                            <p className="font-medium">Your Email (Required) </p>
                        </label>
                        <input 
                            className="p-2" 
                            type="email" 
                            placeholder="Email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col p-4">
                        <label htmlFor="message">
                            <p className=" font-medium">Message</p>
                        </label>
                        <textarea 
                            className="p-2" 
                            placeholder="Your message"
                            name="message" 
                            rows="5" 
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white cursor-pointer font-bold text-sm  py-2 my-2 mx-4 rounded-full basis-1/2 hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                        Submit
                    </button>
                </form>                
                <div className="flex flex-col px-4 md:px-20 2xl:px-10 basis-2/5 ">
                    <h1 className="flex text-cyan-600 font-semibold">Contact Me </h1>
                    <p className="text-grey-800">I am happy to answer any questions you have. Just send me a message in the form with any question you may have  </p> 
                </div>
            </div>

        )
    }

    return (
        <div className="flex justify-center md:pt-10 bg-slate-200">
            {submitted ? 
                <div className="grid grid-cols-1 justify-items-center p-5 mb-10">
                    <img
                        className="h-28 w-28"  
                        src={CheckmarkImage} 
                        alt='checkmark' 
                    />
                    <h1 className="font-extrabold text-xl p-2">Thank you!</h1>
                    <p>Your Submission has been sent.</p>
                </div>
                :<DefaultForm/>
            }
        </div>
    )
}

export default Contact; 