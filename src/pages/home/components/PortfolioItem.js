import React, { useRef, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import PlaceHolder from '../../../images/placeholder-image.png'
import './Projectitem.css';

const PortfolioItem = props => {

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
            <div className="flex justify-center py-4 rounded-lg 2xl:rounded-br-full 2xl:rounded-tr-full my-2 bg-slate-200 " ref={myRef}>
                <div className='flex flex-col  w-full px-2 2xl:flex-row'>
                    
                    <div className='flex justify-center py-2  px-2 2xl:justify-start'>
                        {props.image ? 
                            <img src={props.image} alt='temp' className='max-w-full max-h-full rounded-md sm:max-w-sm hover:-translate-y-1 hover:scale-110 duration-300 lg:px-0'/> :
                            <img src={PlaceHolder} alt='temp' className='bg-white max-w-sm min-w-sm drop-shadow-md rounded'/> } 
                    </div>
                    <div className='flex flex-col justify-around px-5 py-1 '>
                    
                        <div className='py-2'>
                            <a href={props.appLink} className='text-xl font-semibold text-black hover:text-teal-600'>{props.title}</a>
                            <p className=''>{props.description}</p> 
                        </div>

                        <div>  
                            <h1 className='font-semibold py-1 text-xl md:py-2'> Technology </h1>
                            <ul className='grid grid-cols-4  text-center lg:grid-cols-6 2xl:grid-cols-4 2xl:py-0'>
                                {props.technologies.map(element => 
                                    <li 
                                        className="text-white text-sm font-semibold bg-teal-600 p-1 mx-1 mt-1 lg:mr-0 rounded-full cursor-default hover:bg-cyan-500 md:p-2 xl:p-1 " 
                                        key={Math.random().toString()}
                                    >
                                        {element}
                                    </li>
                                )} 
                            </ul>
                        </div>
                        <div className='flex flex-col text-center lg:flex-row 2xl:w-10/12'>
                            <a 
                                href={props.appLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white cursor-pointer font-bold text-sm  py-2 my-1 mr-1 rounded-full basis-1/2 hover:-translate-y-1 hover:scale-110 duration-300"
                            >   
                                View Website
                            </a>
                            <a 
                                href={props.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white cursor-pointer font-bold text-sm  py-2 my-1 mr-1 rounded-full basis-1/2 hover:-translate-y-1 hover:scale-110 duration-300"
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

export default PortfolioItem; 