import styled from 'styled-components'

export const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	background: black;
`
export const Container = styled.div`
	position: absolute;
	top: 30%;
	box-shadow: 2px 10px 35px 1px rgba(153,153,153,0.3);
`

export const Wrap = styled.div`
	background: #272727;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	text-align: center;
	cursor: pointer;

	h1{
		padding: 2rem;
		font-size: 2rem;
	}

	span {
	}
`

export const Dropdown = styled.div`
	background: #1c1c1c;
	color: #9EABD2;
	width: 1000px;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #9EABD2;
	border-top: 1px solid #9EABD2;

	text-align: center;

	p{
	font-size: 2rem;
	padding-left: 10px;
	padding-right: 10px;
	}

`
