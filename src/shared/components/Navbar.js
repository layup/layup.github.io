import "./navbar.css"; 

const Navbar = () => {
    return (
        <nav className="header">
            <div >
                <p className="font-bold rounded p-3 text-blue-500">TOMMY LAY</p>
            </div>
            <ul className="flex flex-row ">
                <li className="text-gray-600 rounded hover:bg-slate-200 hover:text-white cursor-pointer p-3"> 
                    <a href="/">Home</a>
                </li>
                <li className="nav-button">Blog</li>
                <li className="nav-button">Project</li>
                <li className="nav-button">About</li>
                <li className="nav-button">Contact</li>
                <li className="p-3 rounded line-through text-blue-500 cursor-pointer hover:bg-slate-200">Resume</li>
            </ul>
        </nav>
    )
}

export default Navbar