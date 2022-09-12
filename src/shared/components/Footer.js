import './footer.css'

import pdf from '../../images/resume.pdf'

const Footer = () => {

    return (
        <div className="footer_container">
            <span class="footer_copy_right">© 2022 <a href="https://tommylay.com/" class="hover:underline">Tommy Lay™</a>. All Rights Reserved. </span>
            <ul className="footer_ul">
                <li>
                    <a href="https://github.com/layup" class="footer_links">Github</a>
                </li>
                <li>
                    <a href={pdf} target='_blank' rel='noopener noreferrer' class="footer_links">Resume</a> 
                    
                </li>
            </ul>
        </div>
    )
}

export default Footer