import { useState } from "react";
import {
	HeroContainer, HeroFlex, HeroBg, HeroImage, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, BlackShade
} from './heroElements'
import {Button} from '../buttonElement'
import Phone from '../../images/phone.png'

const HeroSection = () => {

	const [hover,setHover] = useState(false)
	const onHover = () => {setHover(!hover)}

	return(
		<>
			<HeroContainer id="home">
				<HeroBg>
				</HeroBg>
				<HeroContent>
					<div>
						<HeroH1>
							Get Paid Every Time You Shop
						</HeroH1>
						<HeroP>
							Money is added to your account every time you shop with rainyday. No catch: simply download the app, shop like you normally do, and watch as your balance grows!
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
								Join today{hover ? <ArrowForward /> : <ArrowRight />}
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
