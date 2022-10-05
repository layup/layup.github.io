import TypeWriterEffect from 'react-typewriter-effect';
import profile from '../../../images/profile_animated.png'
import Technologies from '../../../shared/components/Technologies';

import github_icon from '../../../images/icons/logo-github.svg'
import linkedin_icon from '../../../images/icons/logo-linkedin.svg'

import './landing.css'

//  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt='javascript' className='scale-10 max-h-sm'></img> 

const Landing = () => {
    return (
        <div className='h-screen py-8 flex justify-center md:h-fit 2xl:py-16'>
            <div className="flex justify-center md:w-8/12 xl:px-10">
                <div className="flex flex-col px-8 2xl:flex-row-reverse">                        
                    <div className='flex justify-center py-5 xl:basis-3/4 '>
                        <img src={profile} alt='Tommy' className='profile h-60 rounded-full bg-gradient-to-b from-teal-500 xl:h-80 '/> 
                     </div>     
                    <div className='flex flex-col text-center lg:text-left lg:px-10'>
                        <h1 className='text-2xl font-bold py-4 md:text-4xl'>Hi, my name is <span className=' text-teal-600'> Tommy</span>👋</h1>
                        <h3 className='text-lg pb-4 font-medium md:text-2xl'>Full Stack Developer</h3>
                        <p className='font-medium text-gray-800'>
                            I am a recent graduate from the University of Victoria with a Degree in Computer Science. I'm a developer who loves to challenge myself and solve real world problems!   
                        </p>
                     
                        <div className='flex justify-around py-6 lg:justify-start lg:py-4'>
                            <a href='https://github.com/layup' className=''>
                                <img className='h-8 hover:-translate-y-1 hover:scale-110 duration-300'src={github_icon} alt='github icon' /> 
                            </a>
                            <a href='https://www.linkedin.com/in/tommylay/'> 
                                <img className='h-8 hover:hover:-translate-y-1 hover:scale-110 duration-300'src={linkedin_icon} alt='github icon' /> 
                            </a>
                        </div>
                        <Technologies />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing; 