
import PortfolioItem from './PortfolioItem';
import IndecisionAppImage from '../../../images/indecision.png'
import SlackAppImage from '../../../images/slack.png'
import placesAppImage from '../../../images/places.png'

const Portfolio = () => {
    

    return (
        <div className="flex justify-center py-4 " >
            <div className="flex flex-col justify-center md:w-8/12 lg:px-10 xl:px-20 ">

                <hr  className='border-t-2 border-gray-200 mx-2 py-5'/>

                <div className='px-8 text-center py-2 lg:text-left '>
                    <h1 className="text-4xl font-semibold">Portfolio</h1>
                    <p> Welcome to my projects </p>
                </div>

                <PortfolioItem 
                    title="Indecision App"
                    description="An application that helps you decide what to do! An application for those indecisive people out there!"
                    technologies={["HTML/CSS", "ReactJS"]}
                    githubLink="https://github.com/layup/indecision_app"
                    appLink="https://tommylay.com/indecision_app/"
                    image={IndecisionAppImage}    
                />

                <PortfolioItem 
                    title="Your Places"
                    description="An application which allows users to create a database of places that they've visited and to see other users places"
                    technologies={["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "Heroku"]}
                    appLink="https://mern-b7622.web.app/"
                    image={placesAppImage}                    
                />
                <PortfolioItem 
                    title="Slack Clone"
                    description="A slack communcation clone that uses google authentication sign in"
                    technologies={["ReactJS", "Firebase", "HTML/CSS"]}
                    githubLink="https://github.com/layup/slack-clone" 
                    appLink="https://slack-clone-b4221.web.app/"
                    image={SlackAppImage}
                />

            </div>
        </div>
    )
}

export default Portfolio;