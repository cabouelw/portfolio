import AboutMeSection from '../components/Home/AboutMeSection'
import ContactSection from '../components/Home/ContactMeSection'
import SkillsSection from '../components/Home/SkillsSection'
import FirstSection from '../components/Home/firstSection'
import ProjectSection from '../components/Home/projectSection'


export default function Home() {
	return (
		<>
			<FirstSection />
			<ProjectSection />
			<SkillsSection />
			<AboutMeSection />
			<ContactSection />
		</>
	)
}
