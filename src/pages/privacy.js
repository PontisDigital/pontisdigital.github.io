import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useState } from 'react';
import Footer from '../components/footer';
import Privacy from '../components/privacy';

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
			<Privacy lang={lang}/>
			<Footer/>
		</>
	)
}

export default Home
