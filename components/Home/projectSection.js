import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProjectSection() {
    return (
        <section className='w-full py-[5rem]' id="works">
            <ProjectNav />
            <ProjectList />
        </section>
    )
}

function ProjectNav() {
    return <div className="flex text-5xl">
        <span className='font-bold text-lg text-primary flex-none' >#</span><span className='font-bold text-5xl text-[#fff] grow' >projects <hr className="w-2/4  sm:inline-block align-middle text-primary hidden " /></span>

    </div>
}

function ProjectList() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => setProjects(json.projects));
    }, [])
    return <div className="w-full mt-8 gap-4 text-center  md:grid md:grid-cols-2 lg:grid-cols-3  pb-8 relative  flex  overflow-auto ">
        {projects.map((project, index) => <Project project={project} key={project.name} />)}
    </div>
}

function Project({ project }) {
    return <div className="grid text-gray grid-cols-1 divide-y m-0 border border-gray justify-self-center snap-normal snap-center shrink-0 max-w-[19rem] md:max-w-none">
        <img className="object-cover w-96 h-96" src={project.img} />
        <p className="line-clamp-2" >{project.tech.join(', ')}</p>
        <div className="grid p-2 gap-4 mb-3" >
            <h1 className="text-[1.5rem] text-[white]" >{project.name}</h1>
            <span className="line-clamp-2" >{project.description} </span>
            <div className="flex justify-around gap-4">
                {project.live && <Link href={project.live} ><span className="border border-primary px-4 py-1 cursor-pointer">Live {"<~>"}</span></Link>}
                <Link href={project.github}><span className="border border-gray px-4 py-1 cursor-pointer">GitHub {">"}</span></Link>
            </div>
        </div>
    </div>
}