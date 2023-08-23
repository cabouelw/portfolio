import { useEffect, useState } from "react"
import logo from "../../public/Icons/dots.svg"
import logo1 from "../../public/Icons/logo.svg"
import { SectionHeader } from "./ContactMeSection"

export default function SkillsSection() {
    return (
        <section id="skills" className='snap-start h-screen'>
            <div data-aos="fade-up" className="h-full flex flex-col justify-center md:gap-36 items-center gap-4">
                <SectionHeader title="Skills" />
                <div className="grid lg:grid-cols-2 items-center w-full gap-8 relative md:grid-cols-1" >
                    <SkillsDesign />
                    <SkillsContainer />
                </div>
            </div>
        </section>
    )
}

function SkillsDesign() {
    return <div className="relative w-full h-80 md:h-96 justify-self-center md:w-2/3">
        <img className=" absolute top-1/6 " src={logo.src} />
        <img className=" absolute right-0 bottom-1/4  " src={logo.src} />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  border border-gray w-32 h-32" />
        <img className=" absolute bottom-3 left-1/4 scale-150" src={logo1.src} />
        <span className="absolute bottom-4 border border-gray w-16 h-16" />
    </div>
}

function SkillsContainer() {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => setSkills(json.skills));
    }, [])
    return <div className="grid grid-cols-2 grid-rows-2 gap-8">
        {skills.map((skill, index) => <Skill skill={skill} key={skill.title} />)}
    </div>
}

function Skill({ skill }) {
    return <div className=" border border-gray divide-y text-gray w-full h-auto ">
        <p className=" text-[white] px-4 py-2 text-center " >{skill.title}</p>
        <p className="px-4 py-2 text-center" >{skill.skills.join(', ')}</p>
    </div>
}