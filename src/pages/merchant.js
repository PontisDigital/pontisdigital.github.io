import Footer from '../components/footer';
import NavbarNonHome from "../components/navbar/nonHomeNavbar"

import LanguageContext from '../LanguageContext';
import { useContext } from 'react';
import HeroSection from '../components/merchant/hero';

const MerchantPage = () => {
	const {lang} = useContext(LanguageContext);

	return(
		<>
			<NavbarNonHome/>
			<HeroSection/>
			<Footer/>
		</>
	)
}

export default MerchantPage
