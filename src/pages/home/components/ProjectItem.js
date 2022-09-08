import React from 'react';

import PlaceHolder from '../../../images/placeholder-image.png'

const ProjectItem = props => {

    return (
        <div>
            <div className="flex justify-center px-20 py-4 mx-auto w-9/12 " >
                <div className='flex h-64 w-full '>
                    {props.image ? 
                        <img src={props.image} alt='temp' className='object-cover max-w-sm min-w-sm drop-shadow-md rounded hover:-translate-y-1 hover:scale-110 duration-300'/> :
                        <img src={PlaceHolder} alt='temp' className='bg-white max-w-sm min-w-sm drop-shadow-md rounded'/> }
                    <div className='flex flex-col justify-around px-5 py-1 border-2 w-full'>
                        <div>
                            <a href={props.appLink} className='text-xl font-semibold text-blue-500'>{props.title}</a>
                            <p className=''>{props.description}</p> 
                        </div>
                        <div>  
                            <p className='font-semibold py-2'> Technology </p>
                            <ul className='flex'>
                                {props.technologies.map(element => <li className="text-white text-sm font-medium bg-blue-400 p-1 border-2 rounded-lg cursor-default hover:bg-blue-500" key={Math.random().toString()}>{element}</li>)} 
                            </ul>

                        </div>
                        <div className=''>
                            <a 
                                href={props.appLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link-button hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300 "
                            >   
                                View Website
                            </a>
                            <a 
                                href={props.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link-button hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300"
                            >
                                View Source Code
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem; 