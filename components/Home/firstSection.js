import imageBG from '../../public/Icons/imagebg.svg'
import Dots from '../../public/Icons/dots.svg'
import doubleQ from '../../public/Icons/doubleq.svg'
import imageHome from '../../public/Icons/imagen1.svg'
import { Button, Card, CardBody, CardFooter, Dialog, Typography } from "@material-tailwind/react";
import { useState } from 'react';

export default function FirstSection() {
    return (
        <section id="home" className='snap-start h-screen grid items-center gap-4' >
            <div data-aos="fade-down" className="h-full flex flex-col justify-center items-center md:gap-36 gap-4 ">
                <div className="flex justify-center items-center w-11/12 lg:flex-row flex-col gap-8">
                    <HelloSection />
                    <AboutMe />
                </div>
                <DoubleQ />
            </div>
        </section>
    )
}


function HelloSection() {
    const [show, setShow] = useState(false)
    return <>
        <div className="sm:py-[4.6rem] flex flex-col items-center gap-8 w-full text-center lg:text-start ">
            <h2 className='text-title text-[#fff] font-bold'>{"Hi I'm Choaib AbouElWafa,"}<br />{" I'm  a "}<span className='text-primary'>front-end</span> developer</h2>
            <p className='text-gray'>{"I possess expertise in web development, encompassing :"}<br />{" HTML, CSS, JavaScript, along with proficiency in frameworks such as ReactJS (Next.js) and Svelte."}</p>
            <div className='flex gap-8'>
                <span className='border-2 border-solid border-primary py-2 px-4 w-fit text-[#fff] font-sans cursor-pointer bg-primary bg-opacity-40 hover:bg-opacity-100 hover:scale-110 sm:inline hidden transition duration-700 ease-in-out' onClick={() => setShow(!show)} >Contact ME!!</span>
                <span className='border-2 border-solid border-primary py-2 px-4 w-fit text-[#fff] font-sans cursor-pointer hover:bg-primary hover:scale-110 sm:inline hidden transition duration-700 ease-in-out' ><a target="_blank" href="https://drive.google.com/file/d/12p4Pjr6Ra1n0EUMSO3EM9i1G7DAgGoNy" rel="noopener noreferrer">My Resume {">"}</a></span></div>
        </div>
        <ContactForm show={show} setShow={setShow} />
    </>
}

function AboutMe() {
    return <>
        <div className="relative w-1/2 h-fit  ">
            <div className="absolute top-0 left-0  "><img src={imageBG.src} className="h-full" ></img></div>
            <div className="inline-flex relative z-10"><img src={imageHome.src}></img></div>
            <div className="absolute bottom-1/3 right-0 h-1/2 z-20" ><img src={Dots.src} className="h-full" ></img></div>
        </div>
    </>
}

function DoubleQ() {
    return <div className='h-fit w-[80%] '>
        <div className='relative border-2 border-solid border-gray mx-auto mb-12 max-h-max '>
            <div className='absolute left-[1rem] bg-background w-fit h-fit p-[.5rem] top-[-1rem]'><img src={doubleQ.src} /></div>
            <p className='md:motion-safe:animate-typing  md:overflow-hidden md:whitespace-nowrap px-8 py-7 text-[1rem] text-center  text-[#fff] mx-auto' >Everybody should learn to program a computer because it teaches you how to think.</p>
            <div className='p-2 absolute right-0 border-2 border-solid border-gray text-gray'>- Steve Jobs</div>
            <div className='absolute right-[1rem] bg-background w-fit h-fit p-[.5rem] bottom-[-1rem]'><img src={doubleQ.src} /></div>
        </div>
    </div>
}

export function ContactForm({ setShow, show }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [send, setSend] = useState(false)

    const sendMessage = async () => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json")

        const body = {
            name,
            email,
            title,
            message
        }

        const options = {
            method: "POST",
            headers,
            mode: "cors",
            body: JSON.stringify(body),
        }

        fetch("https://eopl3975e2r25z8.m.pipedream.net", options).then((res) => {
            setSend(true)
            setTimeout(() => {
                setSend(false)
                setShow(false)
                setName('')
                setEmail('')
                setTitle('')
                setMessage('')
            }, 2000)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendMessage();
    }

    return <Dialog open={show} handler={() => setShow(!show)} className="bg-background ">
        <Card className="bg-transparent" >
            {send && <div className="bg-green-500 text-white text-center py-2">Message Sent</div>}
            {!send && <><Typography variant="h1" className="w-full py-4 text-title text-center" style={{ color: "#C778DD" }}>
                Contact Me
            </Typography>
                <CardBody className="flex flex-col gap-8 bg-transparent">
                    <div className="flex gap-4">
                        <input class="rounded w-full p-3 leading-tight bg-transparent focus:outline-none focus:!border-primary focus:shadow-outline focus:ring-blue-500/20 placeholder:text-blue-gray-200 text-[white]" id="name" type="text" placeholder="Name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input class="rounded w-full p-3 leading-tight bg-transparent focus:outline-none focus:!border-primary focus:shadow-outline focus:ring-blue-500/20 placeholder:text-blue-gray-200 text-[white]" id="Email" type="text" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <input class="rounded w-full p-3 leading-tight bg-transparent focus:outline-none focus:!border-primary focus:shadow-outline focus:ring-blue-500/20 placeholder:text-blue-gray-200 text-[white]" id="Title" type="text" placeholder="Subject" value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    <textarea class="rounded w-full p-3 leading-tight bg-transparent focus:outline-none focus:!border-primary focus:shadow-outline focus:ring-blue-500/20 placeholder:text-blue-gray-200 text-[white]" id="Message" type="text" placeholder="Message" value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </CardBody>
                <CardFooter >
                    <Button className="bg-transparent hover:bg-primary border border-gray" onClick={handleSubmit}>Send</Button>
                </CardFooter></>}
        </Card>
    </Dialog>
}
