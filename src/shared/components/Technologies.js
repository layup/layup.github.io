
import TechItems from "./TechItems"


const Technologies = () => {
    return (
        <div className="py-2">
            <p className="font-semibold text-2xl py-2">Skills</p>
            <div className="flex">
                <TechItems 
                    img_src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                    tech_name="ReactJS"
                />
                <TechItems 
                    img_src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                    tech_name="NodeJS"
                />
                <TechItems 
                    img_src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                    tech_name="ExpressJS"
                />
                <TechItems 
                    img_src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png"
                    tech_name="Python"
                />
                <TechItems 
                    img_src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                    tech_name="MongoDB"
                />

            </div>
        </div>  
    )

}

export default Technologies