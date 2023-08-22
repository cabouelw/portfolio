import Link from "next/link"
import { useEffect, useState } from "react"
import { SectionHeader } from "./ContactMeSection";

export default function ProjectSection() {
    return (
        <section  id="works" className='snap-start h-screen'>
            <div data-aos="fade-up" className="h-full flex flex-col justify-center md:gap-36  items-center gap-4 ">
            <SectionHeader title="projects" />
            <ProjectList />
            </div>
        </section>
    )
}

function ProjectList() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => setProjects(json.projects));
    }, [])
    return <div className="w-[90%] md:w-full gap-4 text-center items-start pb-8 relative flex overflow-x-auto md:justify-center">
        {projects.map((project, index) => <Project project={project} key={project.name} />)}
    </div>
}

function Project({ project }) {
    return <div className="grid text-gray grid-cols-1 divide-y m-0 border border-gray justify-self-center shrink-0 max-w-sm hover:bg-[#4a5360] cursor-pointer hover:border-primary">
        <img className="object-cover justify-self-center " src={project.img} />
        <p className="line-clamp-2" >{project.tech.join(', ')}</p>
        <div className="grid p-2 gap-4 mb-3" >
            <h1 className="text-[1.5rem] text-[white]" >{project.name}</h1>
            <span className="line-clamp-2" >{project.description} </span>
            <div className="flex justify-around gap-4">
                {project.live && <Link href={project.live} ><span className="border hover:bg-primary hover:text-white border-primary px-4 py-1 cursor-pointer">Live {"<~>"}</span></Link>}
                <Link href={project.github}><span className="border hover:bg-primary hover:text-white border-gray px-4 py-1 cursor-pointer">GitHub {">"}</span></Link>
            </div>
        </div>
    </div>
}