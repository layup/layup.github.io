import React, { useRef, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import PlaceHolder from '../../../images/placeholder-image.png'
import './Projectitem.css';

const ProjectItem = props => {

    const [visableComponent, setVisableComponent] = useState(false);

    const myRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            if(entry.isIntersecting === true){
                setVisableComponent(true);
            }
        });
    
        observer.observe(myRef.current);
      }, []);

    return (
        <div>
            <CSSTransition
                in={visableComponent}
                timeout={300}
                classNames="my-node"
            >
            <div className="flex justify-center p-5 mx-5 md:px-20 md:mx-auto 2xl:w-9/12" ref={myRef}>
                <div className='flex flex-col h-full p-5 md:w-full 2xl:flex-row 2xl:h-72 bg-slate-100 rounded-xl drop-shadow-md'>
                    <div className='flex justify-center self-center 2xl:h-60 2xl:w-96 py-2 2xl:py-0'>
                        {props.image ? 
                            <img src={props.image} alt='temp' className='object-cover px-4 max-w-sm max-h-sm drop-shadow-md rounded-md hover:-translate-y-1 hover:scale-110 duration-300 h lg:px-0'/> :
                            <img src={PlaceHolder} alt='temp' className='bg-white max-w-sm min-w-sm drop-shadow-md rounded'/> } 
                    </div>
                    <div className='flex flex-col justify-around px-5 py-1 w-full bg-slate-100 rounded-xl'>
                    
                        <a href={props.appLink} className='text-xl text-center font-semibold text-blue-500  2xl:text-left'>{props.title}</a>  
                        <div>
                            <h1 className='font-semibold'>About</h1>
                            <p className=''>{props.description}</p> 
                        </div>

                        <div>  
                            <h1 className='font-semibold py-1 md:py-2'> Technology </h1>
                            <ul className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 text-center py-2 2xl:flex 2xl:flex-row 2xl:py-0'>
                                {props.technologies.map(element => <li className="text-white text-sm font-medium bg-blue-400 p-1 mr-1 lg:mb-1 rounded-lg cursor-default hover:bg-blue-500" key={Math.random().toString()}>{element}</li>)} 
                            </ul>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a 
                                href={props.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link-button hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300"
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
            </CSSTransition>
        </div>
    )
}

export default ProjectItem; 