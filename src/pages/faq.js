import Accordion from "../components/accordion/accordion"
import Footer from "../components/footer"
import NavbarNonHome from "../components/navbar/nonHomeNavbar"
import styled from 'styled-components'

const Flex = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const FaqPage = () => {

	return(
		<>
			<Flex>
				<NavbarNonHome/>
				<Accordion/>
				<Footer/>
			</Flex>
		</>
	)
}

export default FaqPage
