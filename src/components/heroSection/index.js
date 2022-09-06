import { useEffect, useRef, useState } from "react";
import {
	HeroContainer, HeroBg, VantaBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight
} from './heroElements'
import {Button} from '../buttonElement'
import WAVES from "vanta/dist/vanta.waves.min";

//TODO WAITLIST PROMPT
const HeroSection = () => {

	const [hover,setHover] = useState(false)
	const onHover = () => {setHover(!hover)}

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
	return(
		<>
			<HeroContainer id="home">
				<HeroBg>
					<VantaBg ref={vanta_element_ref}/>
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
