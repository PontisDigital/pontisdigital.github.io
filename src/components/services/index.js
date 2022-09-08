import Icon1 from "../../images/shopping.svg"
import Icon2 from "../../images/preparedForRainyday.svg"
import Icon3 from "../../images/access.svg"
import { ServicesP, ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesCard } from "./servicesElements";

import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';
const Services = () => {
	const {lang} = useContext(LanguageContext);
	return (
		<>
			<ServicesContainer id="nutshell">
				<ServicesH1>
					{lang==='en' ? 'In a Nutshell' : 'En una Palabra'}
				</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1}/>
						<ServicesH2>
							{lang==='en' ? 'Earn More' : 'Ganar Mas'}
						</ServicesH2>
						<ServicesP>
							{lang==='en' ? 'Shop like you already do and earn hundreds.' : 'Compra como ya lo haces y gana cientos.'}
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2}/>
						<ServicesH2>
							{lang==='en' ? 'Stress Less' : 'Menos Estrés'}
						</ServicesH2>
						<ServicesP>
							{lang==='en' ? 'With us, you’ll always be prepared for a rainy day.' : 'Con nosotros, siempre estarás preparado para un día lluvioso.'}
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3}/>
						<ServicesH2>
							{lang==='en' ? 'Access Always' : 'Acceder Siempre'}
						</ServicesH2>
						<ServicesP>
							{lang==='en' ? 'Get paid in real time and access your balance anytime, anywhere.' : 'Reciba pagos en tiempo real y acceda a su saldo en cualquier momento y en cualquier lugar.'}
						</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	)
}

export default Services
