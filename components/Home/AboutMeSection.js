import logo from "../../public/Icons/Dots.svg"
import logo1 from "../../public/Icons/AboutMe.png"

export default function AboutMeSection() {
    return (
        <section className='w-full py-32' id="about-me">
            <AboutMeHeader />
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-16" >
                <AboutMe />
                <AboutMeDesign />
            </div>
        </section>
    )
}

function AboutMeHeader() {
    return <div className="flex text-5xl mb-8">
        <span className='font-bold text-lg text-primary flex-none' >#</span><span className='font-bold text-5xl text-[#fff] grow' >About-Me <hr className="w-3/5  inline-block align-middle text-primary" /></span>
    </div>
}

function AboutMe() {
    return <div className="text-gray grid grid-cols-1 gap-8 items-center">
        <p>Hello, i’m Choaib!<br/><br/>

            I’m a self-taught front-end developer based in Berrechid, Morocco. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br /><br />

            Transforming my creativity and knowledge into a websites has been my passion for over a year.<br /> I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
    </div>
}

function AboutMeDesign() {
    return <div className="grid items-center relative w-full justify-self-center  overflow-hidden ">
        <img className=" absolute top-1/4 " src={logo.src} />
        <img className=" absolute right-1/4 z-10 bottom-3/4  " src={logo.src} />
        <span className="absolute bottom-1/2  left-1/3 border border-gray w-32 h-32" />
        <img className="  scale-50 bottom-0 top-0 right-0 " src={logo1.src} />
        <span className="absolute bottom-4  border border-gray w-16 h-16" />
    </div>
}