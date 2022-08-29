import {
	FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksWrapper,
	SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink
} from "./footerElements"
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
const Footer = () => {
	return(
		<>
			<FooterContainer>
				<FooterWrap>
					<FooterLinksContainer>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>
									About Us
								</FooterLinkTitle>
								<FooterLink to="/login">
									How it works
								</FooterLink>
								<FooterLink to="/login">
									Testimonials
								</FooterLink>
								<FooterLink to="/login">
									Careers
								</FooterLink>
								<FooterLink to="/login">
									Investors
								</FooterLink>
								<FooterLink to="/login">
									Terms of Service
								</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle>
									About Us
								</FooterLinkTitle>
								<FooterLink to="/login">
									How it works
								</FooterLink>
								<FooterLink to="/login">
									Testimonials
								</FooterLink>
								<FooterLink to="/login">
									Careers
								</FooterLink>
								<FooterLink to="/login">
									Investors
								</FooterLink>
								<FooterLink to="/login">
									Terms of Service
								</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>
									About Us
								</FooterLinkTitle>
								<FooterLink to="/login">
									How it works
								</FooterLink>
								<FooterLink to="/login">
									Testimonials
								</FooterLink>
								<FooterLink to="/login">
									Careers
								</FooterLink>
								<FooterLink to="/login">
									Investors
								</FooterLink>
								<FooterLink to="/login">
									Terms of Service
								</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle>
									About Us
								</FooterLinkTitle>
								<FooterLink to="/login">
									How it works
								</FooterLink>
								<FooterLink to="/login">
									Testimonials
								</FooterLink>
								<FooterLink to="/login">
									Careers
								</FooterLink>
								<FooterLink to="/login">
									Investors
								</FooterLink>
								<FooterLink to="/login">
									Terms of Service
								</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
					</FooterLinksContainer>
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to="/">
								rainyday
							</SocialLogo>
							<WebsiteRights>
								© Pontis Digital Inc. {new Date().getFullYear()+" "}
								All rights reserved.
							</WebsiteRights>
							<SocialIcons>
								<SocialIconLink
									href="/"
									target="_blank"
									aria-label="Facebook"
								>
									<FaFacebook/>
								</SocialIconLink>
								<SocialIconLink
									href="/"
									target="_blank"
									aria-label="Instagram"
								>
									<FaInstagram/>
								</SocialIconLink>
								<SocialIconLink
									href="/"
									target="_blank"
									aria-label="YouTube"
								>
									<FaYoutube/>
								</SocialIconLink>
								<SocialIconLink
									href="/"
									target="_blank"
									aria-label="Twitter"
								>
									<FaTwitter/>
								</SocialIconLink>
								<SocialIconLink
									href="/"
									target="_blank"
									aria-label="LinkedIn"
								>
									<FaLinkedin/>
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SocialMedia>
				</FooterWrap>
			</FooterContainer>
		</>
	)
}

export default Footer
