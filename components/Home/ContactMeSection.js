import { useState } from "react";
import discord from "../../public/Icons/discord.svg";
import email from "../../public/Icons/email.svg";
import { ContactForm } from "./firstSection";

export default function ContactSection() {
    return (
        <section id="contacts" className='snap-start md:h-[80vh] h-[70vh]'>
            <div data-aos="fade-up" className="flex md:justify-center justify-start flex-col items-center h-full md:gap-32 gap-4">
                <SectionHeader title="Contact" />
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 text-center h-[80%] md:h-min">
                    <Contact />
                    <ContactDetails />
                </div>
            </div>
        </section>
    );
}

export function SectionHeader({title}) {
    return (
        <div className="flex justify-center items-center text-[2rem] font-bold text-white w-full gap-8">
            <hr className="w-1/5  inline-block align-middle text-primary" />
            <span><span className="font-bold text-lg text-primary flex-none">#</span>{title}</span>
            <hr className="w-1/5  inline-block align-middle text-primary" />
        </div>
    );
}
function Contact() {
    const [show, setShow] = useState(false);
    return (
        <div className="text-gray flex flex-col gap-4 justify-center items-center ">
            <p className="text-left">
                {
                    "I'm actively seeking freelance opportunities, but I'm also open to addressing any other inquiries or requests you might have. Please feel free to reach out to me at your convenience."
                }
            </p>

            <ContactForm show={show} setShow={setShow} />
            <div className="flex gap-8">
            <span
                className="border-2 border-solid border-primary py-2 px-4 w-fit text-[#fff] font-sans cursor-pointer bg-primary bg-opacity-40 hover:bg-opacity-100 hover:scale-110 sm:inline md:hidden transition duration-700 ease-in-out"
                onClick={() => setShow(!show)}
            >
                Contact ME!!
            </span>
            <span className='border-2 border-solid border-primary py-2 px-4 w-fit text-[#fff] font-sans cursor-pointer hover:bg-primary md:hidden hover:scale-110 transition duration-700 ease-in-out' ><a target="_blank" href="https://drive.google.com/file/d/1DsIJearwAlABI-ZVYSLmH_U-PaJNRVAx/view?usp=sharing" rel="noopener noreferrer">My Resume {">"}</a></span></div>
        </div>
    );
}

function ContactDetails() {
    return (
        <div className="p-8 border border-gray md:w-auto w-[75vw] justify-self-center items-center h-[12rem] md:justify-self-end text-gray grid gap-4 items-self-center">
            <p className="text-[white]">Message me here</p>
            <a
                href="https://discordapp.com/users/831116254248042527"
                className="flex items-center gap-4 "
            >
                <img className="w-6" src={discord.src} />
                <p>cabouelw</p>
            </a>
            <a
                href="mailto:cabouelw@gmail.com"
                className="flex items-center gap-4 "
            >
                <img className="w-6" src={email.src} />
                <p>cabouelw@gmail.com</p>
            </a>
        </div>
    );
}
