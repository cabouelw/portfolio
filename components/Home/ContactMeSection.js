import { useState } from "react";
import discord from "../../public/Icons/discord.svg";
import email from "../../public/Icons/email.svg";
import { ContactForm } from "./firstSection";

export default function ContactSection() {
    return (
        <section className="w-full py-32" id="contacts">
            <ContactHeader />
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 text-center ">
                <Contact />

                <ContactDetails />
            </div>
        </section>
    );
}

function ContactHeader() {
    return (
        <div className="flex text-5xl mb-8">
            <span className="font-bold text-lg text-primary flex-none">#</span>
            <span className="font-bold text-5xl text-[#fff] grow">
                Contacts{" "}
                <hr className="w-1/5  inline-block align-middle text-primary" />
            </span>
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
            <span
                className="border-2 border-solid border-primary py-2 px-4 w-fit text-[#fff] font-sans cursor-pointer hover:bg-primary md:hidden hover:scale-110 transition duration-700 ease-in-out"
                onClick={() => setShow(!show)}
            >
                Contact ME!!
            </span>
        </div>
    );
}

function ContactDetails() {
    return (
        <div className="p-8 border border-gray w-auto md:justify-self-end text-gray grid gap-4 justify-self-center">
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
