import pdf from '../../images/resume.pdf'

const Navbar = () => {
    return (
        <nav className="flex mt-0 py-2 sticky w-full top-0 z-10 items-center justify-around bg-white">
            <p className="font-bold rounded text-xl">TOMMYLAY</p>
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500  cursor-pointer font-bold text-sm px-4 py-2 rounded-full hover:-translate-y-1 hover:scale-110 duration-300">
                <a href={pdf} target='_blank' rel='noopener noreferrer' className='text-white'>Resume</a>
            </div>
        </nav>
    )
}

export default Navbar