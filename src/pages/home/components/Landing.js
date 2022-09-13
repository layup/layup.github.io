import TypeWriterEffect from 'react-typewriter-effect';
import Tommy from '../../../images/profile.png'
import Technologies from '../../../shared/components/Technologies';

import github_icon from '../../../images/icons/logo-github.svg'
import linkedin_icon from '../../../images/icons/logo-linkedin.svg'

import './landing.css'

//  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt='javascript' className='scale-10 max-h-sm'></img> 

const Landing = () => {
    return (
        <div className='bg-split-white-grey h-screen p-5 lg:px-0'>
            <div className="flex flex-col place-content-center rounded container mx-auto h-5/6 bg-slate-100 drop-shadow-xl md:px-20 md:w-10/12  ">
                <div className="flex flex-row px-4 lg:px-20 ">
                    {/*
                        <div className='p-4'>
                            <img src={Tommy} alt='Tommy' className='h-32 rounded-full '/> 
                        </div>
                    */}
                   
                    <div className='flex flex-col place-content-center'>
       
                        <p className='text-2xl font-semibold py-3 md:text-4xl'>Hi, my name is <span className=' text-amber-600'> Tommy</span> 👋</p>

                        <p className='font-medium'>
                            I'm a fullstack developer based out of Victoria, Canada. I recently gradued from the University of 
                            Victoria with a Degree in Computer Science. I'm a developer who loves to solve real world problems with 
                            awesome people. 
                        </p>
                     
                        
                        <div className='flex py-4'>
                            <a href='https://github.com/layup' className='hover:'>
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