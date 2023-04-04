import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;
`
export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: rgb(75,57,239);
	background: linear-gradient(90deg, rgba(75,57,239,1) 0%, rgba(75,57,239,1) 37%, rgba(255,255,255,1) 100%);
	z-index: -5;
`
export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`
export const HeroImage = styled.img`
	max-width: 80%;
	hegiht: auto;
	z-index: -2;

	@media screen and (max-width: 768px)
	{
		display: none;
		max-width: 100%;
		position: absolute;
		top: -200px;
		left: -45px;
	}
`
export const HeroFlex = styled.div`
	display: flex;
`

export const VantaBg = styled.div`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`

export const BlackShade = styled.div`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: rgba(0,0,0,0.5);
`
export const HeroContent = styled.div`
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	align-items: center;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;

	@media screen and (max-width: 768px)
	{
		display: block;
	}

`

export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: center;
	@media screen and (max-width: 768px)
	{
		font-size: 40px;
	}
	@media screen and (max-width: 480px)
	{
		font-size: 32px;
	}
`

export const HeroP = styled.p`
	margin-top: 24px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

	@media screen and (max-width: 768px)
	{
		font-size: 24px;
	}
	@media screen and (max-width: 480px)
	{
		font-size: 18px;
	}
`

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`
