import styled from 'styled-components'
import {Link} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'

export const Button = styled(Link)`
	border-radius: 50px;
	//background: #061c58;
	background: ${({primary})=>(primary?'#1f1671':'#2f2e41')};
	white-space: nowrap;
	padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
	color: #fff;
	font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover
	{
		transition: all 0.2s ease-in-out;
		background: ${({primary}) => (primary ? '#6a779b': '#061c58')};
		color: ${({primary})=>(primary ? '#000' : '#fff')};
	}
`
export const MobileOnlyButton = styled.button`
	border-radius: 50px;
	//background: #061c58;
	background: ${({primary})=>(primary?'#061c58':'#2f2e41')};
	white-space: nowrap;
	padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
	color: #fff;
	font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover
	{
		transition: all 0.2s ease-in-out;
		background: ${({primary}) => (primary ? '#6a779b': '#061c58')};
		color: ${({primary})=>(primary ? '#000' : '#fff')};
	}

	display: none;
	@media screen and (max-width: 768px)
	{
		display: block;
		position: absolute;
		top: 100px;
	}
`
export const LinkButton = styled(LinkRouter)`
	border-radius: 50px;
	//background: #061c58;
	background: ${({primary})=>(primary?'#061c58':'#2f2e41')};
	white-space: nowrap;
	padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
	color: #fff;
	font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover
	{
		transition: all 0.2s ease-in-out;
		background: ${({primary}) => (primary ? '#6a779b': '#061c58')};
		color: ${({primary})=>(primary ? '#000' : '#fff')};
	}
`
