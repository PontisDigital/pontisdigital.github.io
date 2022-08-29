import { useEffect, useRef, useState } from "react";
import {
	HeroContainer, HeroBg, VantaBg, VantaBG,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight
} from './heroElements'
import {Button} from '../buttonElement'
import NET from "vanta/dist/vanta.net.min";

const HeroSection = () => {

	const [hover,setHover] = useState(false)
	const onHover = () => {setHover(!hover)}

	// ********************** VANTA EFFECT ********************** 
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() =>
	{
		if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: myRef.current,
					color: '#6a779b',
					backgroundColor: '#000',
					points: '20',
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
					<VantaBg ref={myRef}/>
				</HeroBg>
				<HeroContent>
					<HeroH1>
						Easing the Burden of Tomorrow
					</HeroH1>
					<HeroP>
						Sign up for a new account today and receive
						$5 towards your account
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
