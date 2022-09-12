
import ProjectItem from './ProjectItem';

import IndecisionAppImage from '../../../images/indecision.png'
import SlackAppImage from '../../../images/slack.png'
import placesAppImage from '../../../images/places.png'

const ProjectPreview = () => {

    return (
        <div className="flex flex-col mx-auto bg-slate-200 pb-5">
            <div>
                <h1 className="flex text-4xl font-extrabold place-content-center pb-5 ">Projects</h1>
                <ul />

                <ProjectItem 
                    title="Indecision App"
                    description="An application that helps you decide what to do! An application for those indecisive people out there!"
                    technologies={["HTML/CSS", "ReactJS"]}
                    githubLink="https://github.com/layup/indecision_app"
                    appLink="https://tommylay.com/indecision_app/"
                    image={IndecisionAppImage}
                    
                />
                <ProjectItem 
                    title="Your Places"
                    description="An application which allows users to create a database of places that they've visited and to see other users places"
                    technologies={["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "Heroku"]}
                    appLink="https://mern-b7622.web.app/"
                    image={placesAppImage}

                    
                />
                <ProjectItem 
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

export default ProjectPreview;