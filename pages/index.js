import AboutMeSection from '../components/Home/AboutMeSection'
import ContactSection from '../components/Home/ContactMeSection'
import SkillsSection from '../components/Home/SkillsSection'
import FirstSection from '../components/Home/firstSection'
import ProjectSection from '../components/Home/projectSection'


export default function Home() {
	return (
		<div className='grid gap-16 justify-items-center w-full max-w-7xl  px-10 my-20 '>
			<FirstSection />
			<ProjectSection />
			<SkillsSection />
			<AboutMeSection />
			<ContactSection />
		</div>
	)
}
