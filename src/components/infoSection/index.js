import { Column2, Img, ImgWrap, InfoContainer, InfoWrapper,InfoRow,Column1,TopLine,Heading,Subtitle,ButtonWrap,TextWrapper } from './infoElements'
import {Button} from '../buttonElement'
const InfoSection = ({id,lightBg,imgStart,topLine,heading,lightText,darkText,description,buttonLabel,img,alt,primary,dark}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine lightBg={lightBg}>
									{topLine}
								</TopLine>
								<Heading lightText={lightText}>
									{heading}
								</Heading>
								<Subtitle darkText={darkText}>
									{description}
								</Subtitle>
								<ButtonWrap>
									<Button to="waitlist" primary={primary}
										dark={dark}
										smooth={true}
										duration={500}
										spy={true}
										exact={"true"}
										offset={-80}
									>
										{buttonLabel}
									</Button>
								</ButtonWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt}/>
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	)
}

export default InfoSection
