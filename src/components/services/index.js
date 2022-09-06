import Icon1 from "../../images/shopping.svg"
import Icon2 from "../../images/preparedForRainyday.svg"
import Icon3 from "../../images/access.svg"
import { ServicesP, ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesCard } from "./servicesElements";
const Services = () => {
	return (
		<>
			<ServicesContainer id="nutshell">
				<ServicesH1>
					In a Nutshell
				</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1}/>
						<ServicesH2>
							Earn More
						</ServicesH2>
						<ServicesP>
							Shop like you already do and earn hundreds.
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2}/>
						<ServicesH2>
							Stress Less
						</ServicesH2>
						<ServicesP>
							With us, you’ll always be prepared for a rainy day.
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3}/>
						<ServicesH2>
							Access Always
						</ServicesH2>
						<ServicesP>
							Get paid in real time and access your balance anytime, anywhere.
						</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	)
}

export default Services
