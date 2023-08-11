import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import burger from "../public/Icons/menu.svg"
import exit from "../public/Icons/exit.svg"
import git from '../public/Icons/git.svg';
import linkedin from '../public/Icons/linkedin.svg';
import email from '../public/Icons/email.svg';
import discord from '../public/Icons/discord.svg';
import Link from 'next/link';

const NavTo = ({ title, hideHandler }) => {
    const router = useRouter();
    const path = router.asPath;
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (path.includes(title) || path === '/' && title === 'home') setSelected(true);
        else setSelected(false);
    }, [path])

    return (
        <>
            <Link className={`font-normal ${!selected ? 'text-gray' : 'text-[#fff]'} cursor-pointer hover:text-[#fff]`} href={"#" + title}><span className='text-primary'>#</span>{title}</Link>
        </>
    )
}

const NavContainer = ({ ClassName, hideHandler }) => {
    return (
        <div className={ClassName}>
            <NavTo title="home" hideHandler={hideHandler} />
            <NavTo title="works" hideHandler={hideHandler} />
            <NavTo title="skills" hideHandler={hideHandler} />
            <NavTo title="about-me" hideHandler={hideHandler} />
            <NavTo title="contacts" hideHandler={hideHandler} />
        </div>)
}

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <header className="p-6 px-4 grid grid-cols-5 relative h-fit" >
            <div className="flex items-center gap-2 col-start-1 sm:col-span-1 col-span-2" >
                <svg width="16" height="16" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="white" />
                </svg>
                <span className="text-[#fff] text-base font-semibold ">Choaib</span>
            </div>
            <img src={show ? exit.src : burger.src} className='sm:hidden cursor-pointer col-start-6 ' onClick={() => setShow(!show)} />
            <NavContainer hideHandler={() => setShow(false)} ClassName={"hidden items-center gap-8 sm:flex col-end-6 col-span-4  justify-end"} />
            <div className='w-full z-50 flex flex-col col-start-1 col-span-6' >
                {show && <><NavContainer hideHandler={() => setShow(false)} ClassName="flex flex-col items-start gap-8 sm:hidden pt-8" />
                    <div className="flex items-center gap-1 justify-between w-2/3 mx-auto my-8" >
                    <a href="https://github.com/cabouelw" ><img src={git.src} /></a>
                    <a href="https://www.linkedin.com/in/choaibabouelwafa/" ><img src={linkedin.src} /></a>
                    <a href="https://discordapp.com/users/831116254248042527" ><img src={discord.src} /></a>
                    <a href="mailto:cabouelw@gmail.com" ><img src={email.src} /></a>
                    </div></>
                }
            </div>
        </header>
    )
}


export default Header;