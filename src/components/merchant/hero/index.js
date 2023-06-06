import LanguageContext from '../../../LanguageContext';
import { useContext } from 'react';
import {
	HeroContainer, HeroFlex, HeroBg, HeroImage, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, BlackShade, VideoBg
} from './heroElements'
import {Button} from '../../buttonElement'
const HeroSection = () => {
	const {lang} = useContext(LanguageContext);
	const bkgVideo = "https://joy1.videvo.net/videvo_files/video/free/video0458/large_watermarked/_import_60c2f5eed29030.44116403_preview.mp4"
	return(
		<>
			<HeroContainer id="home">
				<VideoBg autoPlay="autoplay" loop="loop" muted>
					<source src={bkgVideo} type="video/mp4" />
				</VideoBg>
				<HeroContent>
				<div>
					<HeroH1>
						{lang==='en' ? 'Earn More for Less' : 'Gana más por menos'}
					</HeroH1>
					<HeroP>
						{lang==='en' ? 'More customers. More loyalty. More money. Pay on success'
						:'Más clientes. Más fidelidad. Más dinero. Paga en función del éxito'

						}
					</HeroP>
					<HeroBtnWrapper>
						<Button to="contact"
							primary='true'
							dark='true'
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							{lang==='en' ? 'Contact us' : 'Contacto'}
						</Button>
					</HeroBtnWrapper>
				</div>
				</HeroContent>
			</HeroContainer>
			<HeroP>
				Video Credit: https://www.videvo.net/video/smiling-woman-customer-paying-with-her-ec-card-at-supermarket-checkout-and-taking-her-brown-paper-bag-with-products-from-the-counter/1105163/
			</HeroP>
		</>
	)
}

export default HeroSection;
