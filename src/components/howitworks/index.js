import Icon1 from "../../images/download.svg"
import Icon2 from "../../images/setup.svg"
import Icon3 from "../../images/earn.svg"
import Icon4 from "../../images/shoppingOnline.svg"
import { ServicesP, ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesCard } from "./servicesElements";

import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';
const HowItWorks = () => {
	const {lang} = useContext(LanguageContext);
	return (
		<>
			<ServicesContainer id="howitworks">
				<ServicesH1>
					{lang==='en' ? 'Saving has never been easier' : 'Ahorrar nunca ha sido tan fácil'}
				</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1}/>
						<ServicesH2>
							{lang==='en' ? 'Step One: Download the App' : 'Paso uno: descarga la aplicación'}
						</ServicesH2>
						<ServicesP>
							{lang==='en' ? 'Coming soon on all platforms. Free forever.' : 'Próximamente en todas las plataformas. Siempre gratis.'}
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2}/>
						<ServicesH2>
							{lang==='en' ? 'Step Two: One-time set-up' : 'Paso dos: configuración rápida'}
						</ServicesH2>
						<ServicesP>
							{lang==='en' ? 'Create an account in less than one minute.' : 'Crea una cuenta en menos de un minuto.'}
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3}/>
						<ServicesH2>
							{lang==='en' ? 'Step Three: Start Earning' : 'Paso tres: comience a ganar dinero'}
						</ServicesH2>
						<ServicesP>
							{lang==='en' ? 'Link your credit/debit card to save automatically. Paying with cash? No worries: just scan the QR code available at check-out and get paid all the same.' : 'Vincula tu tarjeta de crédito/débito para guardar automáticamente. ¿Quiere pagar en efectivo? No se preocupe: simplemente escanee el código QR en el momento del pago y recíbalo de todos modos'}
						</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon4}/>
						<ServicesH2>
							{lang==='en' ? 'Step Four: Enjoy' : 'Paso cuatro: disfruta'}
						</ServicesH2>
						<ServicesP>
							{lang==='en' ? 'Buy those shoes you’ve been wanting, go to a nice restaurant, or simply save up — it’s up to you!' : 'Compra esos zapatos que has estado deseando, ve a un buen restaurante o simplemente ahorra, ¡tú decides!'}
						</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	)
}

export default HowItWorks
