import { useEffect, useRef, useState } from "react";
import {
	HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, BlackShade
} from './heroElements'
import {Button} from '../buttonElement'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import { useCallback } from "react";

import Video from '../../videos/darkerMoney.mp4'

//TODO WAITLIST PROMPT
const HeroSection = () => {

	const [hover,setHover] = useState(false)
	const onHover = () => {setHover(!hover)}

	/*
	// ********************** VANTA EFFECT ********************** 
	const [vantaEffect, setVantaEffect] = useState(0);
	const vanta_element_ref = useRef(null);
	useEffect(() =>
	{
		if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    el: vanta_element_ref.current,
					color: '#000048',
					//points: '20',
					scaleMobile: '0.3'
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
	// ********************** END VANTA EFFECT ********************** 
	*/

	const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

	return(
		<>
			<HeroContainer id="home">
				<HeroBg>
					<VideoBg autoPlay muted src={Video} type='video/mp4'/>
				</HeroBg>
				<HeroContent>
					<HeroH1>
						Easing the Burden of Tomorrow
					</HeroH1>
					<HeroP>
						Sign up for a new account today and receive
						$5
					</HeroP>
					<HeroBtnWrapper>
						<Button to="signup"
							onMouseEnter={onHover} onMouseLeave={onHover}
							primary='true'
							dark='true'
							>
							Get Started {hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroContainer>
		</>
	)
}

export default HeroSection;
