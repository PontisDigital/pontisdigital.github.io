import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useState } from 'react';
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import {englishSlide1,englishSlide2,spanishSlide1,spanishSlide2} from '../components/infoSection/Data';
import Services from '../components/services';
import Footer from '../components/footer';
import Waitlist from '../components/waitlist';
import HowItWorks from '../components/howitworks'

import LanguageContext from '../LanguageContext';
import { useContext } from 'react';

const Home = () => {
	const [isOpen,setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen);
	}
	
	const {lang} = useContext(LanguageContext);

	return(
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<HeroSection/>
			<HowItWorks/>
			<InfoSection {...lang==='en' ? englishSlide1 : spanishSlide1}/>
			<InfoSection {...lang==='en' ? englishSlide2 : spanishSlide2}/>
			<Services/>
			<Waitlist/>
			<Footer/>
		</>
	)
}

export default Home
