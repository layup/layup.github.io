

const Contact = () => {
    return (
        <div className="flex justify-center bg-slate-100 md:pt-10">
                <div className="flex flex-col-reverse lg:flex-row place-content-center rounded-lg p-5">
                    <form className="flex flex-col md:px-16 lg:px-0 lg:w-6/12 ">
                        <div className="flex flex-col p-4">
                            <label htmlFor="name">Your Name (Required) </label>
                            <input type="text" className="p-2" />
                        </div>
                        <div className="flex flex-col p-4">
                            <label>Your Email (Required) </label>
                            <input className="p-2"type="email" />
                        </div>
                        <div className="flex flex-col p-4">
                            <label htmlFor="message">Message</label>
                            <textarea className="p-2" rows="5"></textarea>
                        </div>
                        <button type="submit" className="mx-auto w-11/12 transition ease-in-out delay-150 place-content-center rounded text-center py-2 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300 text-white">Submit</button>
                    </form>                
                    <div className="flex flex-col px-4 md:px-20">
                        <h1 className="flex text-blue-500 font-semibold">Contact Me </h1>
                        <p>I am happy to answer any questions you have. Just send me a message in the form with any question you may have  </p> 
                    </div>
                </div> 
        </div>
    )
}

export default Contact; 