import { useState } from "react";
import {
	HeroContainer, HeroFlex, HeroBg, HeroImage, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, BlackShade
} from './heroElements'
import {Button,MobileOnlyButton} from '../buttonElement'
import PhoneSpanish from '../../images/dashboard.png'
import PhoneEnglish from '../../images/phone.png'

import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';

const HeroSection = () => {

	const [hoverLang,setHoverLang] = useState(false)
	const [hoverStart,setHoverStart] = useState(false)
	const onHoverLang = () => {setHoverLang(!hoverLang)}
	const onHoverStart = () => {setHoverStart(!hoverStart)}

	const {lang,toggleLang} = useContext(LanguageContext);

	return(
		<>
			<HeroContainer id="home">
				<HeroBg>
				</HeroBg>
					<HeroContent>

					<div>
						<HeroH1>
							{lang==='en' ? 'Get Paid Every Time You Shop' : 'Cobra Cada vez que Compre'}
						</HeroH1>
						<HeroP>
							{lang==='en' ? 'Money is added to your account every time you shop with rainyday. No catch: simply download the app, shop like you normally do, and watch your balance grow!'
							:'Se agrega dinero a su cuenta cada vez que compra con rainyday. Sin problema: ¡simplemente descargue la aplicación, compre como lo hace normalmente y observe cómo crece su saldo!'

							}
						</HeroP>
						<HeroBtnWrapper>
							<Button to="waitlist"
								onMouseEnter={onHoverStart} onMouseLeave={onHoverStart}
								primary='true'
								dark='true'
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
								>
								{lang==='en' ? 'Join today' : 'Únete ahora'}
								{hoverStart ? <ArrowForward /> : <ArrowRight />}
							</Button>
						</HeroBtnWrapper>
					</div>
						<HeroImage src={lang==='en' ? PhoneEnglish : PhoneSpanish}/>
				</HeroContent>
			</HeroContainer>
		</>
	)
}

export default HeroSection;
