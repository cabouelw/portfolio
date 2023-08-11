import discord from "../public/Icons/Discord.svg"
import email from "../public/Icons/Email.svg"
import git from "../public/Icons/git.svg"

export default function Footer() {
    return <>
        <footer className="grid grid-cols-6 border-t-2 border-gray  w-full gap-4 p-4" >
            <div className="flex items-center col-start-1 col-span-3 gap-2">
                <svg width="16" height="16" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="white" />
                </svg>
                <span className="text-[#fff] text-base text-[1.2rem] ">Choaib </span>
            <a href="mailto:cabouelw@gmail.com" className="text-gray pl-8 hidden sm:inline">cabouelw@gmail.com</a>
            </div>
            <span className=" col-start-5 col-span-2 sm:col-start-6 text-[white] text-center text-[1.2rem]">Media</span>
            <p className="col-start-1 sm:col-span-3 col-span-4 text-[white] font-thin" >Web developer based in Morocco</p>
            <div className="flex justify-around sm:col-start-6 col-start-5 col-span-2 text-[white] ">
                <a href="https://discordapp.com/users/831116254248042527"><img className="scale-75" src={discord.src} /></a>
                <a href="mailto:cabouelw@gmail.com"><img className="scale-75" src={email.src} /></a>
                <a href="https://github.com/cabouelw"><img className="scale-75" src={git.src}/></a>
            </div>
            <p className="col-start-2 col-span-4 text-gray text-center" >© Copyright 2023. Made by Choaib</p>
        </footer>
    </>
}