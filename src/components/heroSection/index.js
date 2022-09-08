import { useState } from "react";
import {
	HeroContainer, HeroFlex, HeroBg, HeroImage, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, BlackShade
} from './heroElements'
import {Button} from '../buttonElement'
import Phone from '../../images/phone.png'

import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';

const HeroSection = () => {

	const [hover,setHover] = useState(false)
	const onHover = () => {setHover(!hover)}

	const {lang} = useContext(LanguageContext);

	return(
		<>
			<HeroContainer id="home">
				<HeroBg>
				</HeroBg>
				<HeroContent>
					<div>
						<HeroH1>
							{lang==='en' ? 'Get Paid Every Time You Shop' : 'Cobra Cada vez que Compras'}
						</HeroH1>
						<HeroP>
							{lang==='en' ? 'Money is added to your account every time you shop with rainyday. No catch: simply download the app, shop like you normally do, and watch as your balance grows!'
							:'Se agrega dinero a su cuenta cada vez que compra con rainyday. Sin problema: ¡simplemente descargue la aplicación, compre como lo hace normalmente y observe cómo crece su saldo!'

							}
						</HeroP>
						<HeroBtnWrapper>
							<Button to="waitlist"
								onMouseEnter={onHover} onMouseLeave={onHover}
								primary='true'
								dark='true'
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
								>
								{lang==='en' ? 'Join today' : 'Únete hoy'}
								{hover ? <ArrowForward /> : <ArrowRight />}
							</Button>
						</HeroBtnWrapper>
					</div>
					<HeroImage src={Phone}/>
				</HeroContent>
			</HeroContainer>
		</>
	)
}

export default HeroSection;
