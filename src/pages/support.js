import Footer from "../components/footer"
import NavbarNonHome from "../components/navbar/nonHomeNavbar"
import styled from 'styled-components'
import ButtonMailto from "../components/ButtonMailTo"
import { HeroH1 } from "../components/heroSection/heroElements"

const Flex = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	flex-direction: column;
`

const SupportPage = () => {

	return(
		<>
			<Flex>
				<NavbarNonHome/>
				<ButtonWrap>
					<HeroH1>
						Need help?
					</HeroH1>
					<br/>
					<ButtonMailto label={"Contact Support"} mailto={"mailto:support@rainyday.deals"}/>
				</ButtonWrap>
				<Footer/>
			</Flex>
		</>
	)
}

export default SupportPage
