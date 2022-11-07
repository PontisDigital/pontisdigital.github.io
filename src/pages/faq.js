import Accordion from "../components/accordion/accordion"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
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
				<Navbar/>
				<Accordion/>
				<Footer/>
			</Flex>
		</>
	)
}

export default FaqPage
