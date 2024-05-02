import Header from "./Header";
import git from '../public/Icons/git.svg';
import linkedin from '../public/Icons/linkedin.svg';
import email from '../public/Icons/email.svg';
import discord from '../public/Icons/discord.svg';
import imageBG from '../public/Icons/imagebg.svg';
import cv from '../public/Icons/cv.svg';
import Footer from "./Footer";

const AppWrapper = ({ children }) => {
    return (
        <div className="container max-w-7xl w-full relative mx-auto snap-mandatory snap-y ">
            <title>Choaib Abouelwafa</title>
            <div className="w-32 top-32 right-[-50px] absolute z-0"><img src={imageBG.src} className="h-full" ></img></div>
            <div className="w-32 left-[-50px] bottom-2/3 absolute z-0"><img src={imageBG.src} className="h-full" ></img></div>
            <div className="fixed left-2 top-6 w-8 md:flex flex-col items-center gap-1 hidden ">
                <div className="h-64 w-0.5 bg-gray" />
                <a href="https://github.com/cabouelw" ><img src={git.src} title="Github" /></a>
                <a href="https://www.linkedin.com/in/choaibabouelwafa/" ><img src={linkedin.src} title="Linkedin" /></a>
                <a href="https://discordapp.com/users/831116254248042527" ><img src={discord.src} title="Discord" /></a>
                <a href="mailto:cabouelw@gmail.com" ><img src={email.src} title="Email" /></a>
                <a href="/ChoaibAbouelwafa.pdf" target="_blank" rel="noopener noreferrer" download><img src={cv.src} title="My Resume" /></a>
            </div>
            <div className="w-full sticky top-0 bg-background z-[21]">
                <Header />
            </div>
            <div className="px-4">
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default AppWrapper;