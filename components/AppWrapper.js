import Header from "./Header";
import git from '../public/Icons/git.svg';
import linkedin from '../public/Icons/linkedin.svg';
import email from '../public/Icons/email.svg';
import discord from '../public/Icons/discord.svg';
import imageBG from '../public/Icons/imagebg.svg'
import Footer from "./Footer";
import { useCallback, useEffect, useState } from "react";


const AppWrapper = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);
    const onScroll = useCallback(event => {
        const {  scrollY } = window;
        setScrollY(scrollY);
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);
    return (
        <div className="container max-w-7xl w-full relative mx-auto overflow-x-hidden">
            <div className="w-32 top-32 right-[-50px] absolute z-0" style={{
                top: `${scrollY + 200}px`,
            }} ><img src={imageBG.src} className="h-full" ></img></div>
            <div className="w-32 left-[-50px] bottom-2/3 absolute z-0" style={{
            }} ><img src={imageBG.src} className="h-full" ></img></div>
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