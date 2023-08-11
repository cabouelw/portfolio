import Header from "./Header";
import git from '../public/Icons/git.svg';
import linkedin from '../public/Icons/Linkedin.svg';
import email from '../public/Icons/email.svg';
import discord from '../public/Icons/Discord.svg';
import Footer from "./Footer";


const AppWrapper = ({ children }) => {
    return (
        <div className="container max-w-7xl w-full relative mx-auto ">
            <div className="fixed left-2 top-6 w-8 md:flex flex-col items-center gap-1 hidden ">
                <div className="h-64 w-0.5 bg-gray" />
                <a href="https://github.com/cabouelw" ><img src={git.src} /></a>
                <a href="https://www.linkedin.com/in/choaibabouelwafa/" ><img src={linkedin.src} /></a>
                <a href="https://discordapp.com/users/831116254248042527" ><img src={discord.src} /></a>
                <a href="mailto:cabouelw@gmail.com" ><img src={email.src} /></a>
            </div>
            <div className="w-full sticky top-0 bg-background z-[21]">
                <Header />
            </div>
            <div className="w-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default AppWrapper;