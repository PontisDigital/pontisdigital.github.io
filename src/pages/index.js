import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useState } from 'react';
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import {homeObjOne,homeObjTwo} from '../components/infoSection/Data';
import Services from '../components/services';
import Footer from '../components/footer';
import Waitlist from '../components/waitlist';

const Home = () => {
	const [isOpen,setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen);
	}
	return(
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<HeroSection/>
			<InfoSection {...homeObjOne}/>
			<InfoSection {...homeObjTwo}/>
			<Services/>
			<Waitlist/>
			<Footer/>
		</>
	)
}

export default Home
