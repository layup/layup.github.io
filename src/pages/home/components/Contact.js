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
            <div className="flex flex-col-reverse xl:flex-row place-content-center rounded-lg p-5">
                <form 
                    className="flex flex-col md:px-16 xl:px-0 xl:w-6/12"
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <div className="flex flex-col p-4">
                        <label htmlFor="name">Your Name (Required) </label>
                        <input 
                            type="text" 
                            name='name'
                            className="p-2" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="flex flex-col p-4">
                        <label>Your Email (Required) </label>
                        <input 
                            className="p-2" 
                            type="email" 
                            placeholder="Email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col p-4">
                        <label htmlFor="message">Message</label>
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
                        className="mx-auto w-11/12 transition ease-in-out delay-150 place-content-center rounded text-center py-2 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300 text-white"
                    >
                        Submit
                    </button>
                </form>                
                <div className="flex flex-col px-4 md:px-20">
                    <h1 className="flex text-blue-500 font-semibold">Contact Me </h1>
                    <p>I am happy to answer any questions you have. Just send me a message in the form with any question you may have  </p> 
                </div>
            </div>

        )
    }

    return (
        <div className="flex justify-center bg-slate-100 md:pt-10">
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