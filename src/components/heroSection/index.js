import { useEffect, useRef, useState } from "react";
import {HeroContainer, HeroBg, VantaBg, VantaBG} from './heroElements'
import NET from "vanta/dist/vanta.net.min";

const HeroSection = () => {
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
					points: '20'
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
	return(
		<>
			<HeroContainer id="home">
				<HeroBg>
					<VantaBg ref={myRef}/>
				</HeroBg>
			</HeroContainer>
		</>
	)
}

export default HeroSection;
