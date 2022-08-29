import Icon1 from "../../images/holdingCard.svg"
import Icon2 from "../../images/mobilePayment.svg"
import Icon3 from "../../images/onlineTransfer.svg"
import { ServicesP, ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesCard } from "./servicesElements";
const Services = () => {
	return (
		<>
			<ServicesContainer id="services">
				<ServicesH1>
					Our Services
				</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1}/>
						<ServicesH2>
							Reduce Expenses
						</ServicesH2>
						<ServicesP>
							We Help Reduce Your Fees and Increase your overall revenue
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2}/>
						<ServicesH2>
							Virtual Offices
						</ServicesH2>
						<ServicesP>
							You can access the platform anywhere online in the world
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3}/>
						<ServicesH2>
							Premium Banking
						</ServicesH2>
						<ServicesP>
							Unlock our special membership card that returns 5% cashback
						</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	)
}

export default Services
