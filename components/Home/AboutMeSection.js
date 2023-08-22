import logo from "../../public/Icons/dots.svg"
import logo1 from "../../public/Icons/aboutme.png"
import { SectionHeader } from "./ContactMeSection"

export default function AboutMeSection() {
    return (
        <section id="about-me" className="snap-start h-screen ">
            <div data-aos="fade-up" className="h-full flex flex-col justify-center md:gap-36 items-center gap-4 ">
                <SectionHeader title="About-Me" />
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-16" >
                    <AboutMe />
                    <AboutMeDesign />
                </div>
            </div>
        </section>
    )
}

function AboutMe() {
    return <div className="text-gray grid grid-cols-1 gap-8 items-center">
        <p>Hello, i’m Choaib!<br /><br />

            I’m a self-taught front-end developer based in Berrechid, Morocco. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br /><br />

            Transforming my creativity and knowledge into a websites has been my passion for over a year.<br /> I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
    </div>
}

function AboutMeDesign() {
    return <div className="grid items-center relative w-full justify-self-center  overflow-hidden md:h-full h-[50vh] ">
        <img className=" absolute top-1/4 " src={logo.src} />
        <img className=" absolute right-1/4 z-10 bottom-3/4  " src={logo.src} />
        <span className="absolute bottom-1/2  left-1/3 border border-gray w-32 h-32" />
        {/* <img className="  scale-50 bottom-0 top-0 right-0 " src={logo1.src} /> */}
        <span className="absolute bottom-4  border border-gray w-16 h-16" />
    </div>
}