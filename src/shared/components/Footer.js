

import pdf from '../../images/resume.pdf'

const Footer = () => {

    return (
        <div className="flex flex-row justify-center">
            <div className='flex justify-between items-center w-8/12 px-20'>
                <span>© 2022 <a href="https://tommylay.com/" className="text-black hover:underline hover:text-teal-600">Tommy Lay™</a>. All Rights Reserved. </span>
                <ul className="footer_ul">
                    <li>
                        <a href="https://github.com/layup" className="text-black hover:text-teal-600">Github</a>
                    </li>
                    <li>
                        <a href={pdf} target='_blank' rel='noopener noreferrer' className="text-black hover:text-teal-600">Resume</a> 
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer