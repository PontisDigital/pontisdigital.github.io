import {
	FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksWrapper,
	SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink
} from "./footerElements"
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';
const Footer = () => {

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	const {lang} = useContext(LanguageContext);

	return(
		<>
			<FooterContainer>
				<FooterWrap>
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to="/" onClick={toggleHome}>
								rainyday
							</SocialLogo>
							<WebsiteRights>
								© Pontis Digital {lang==='en'?'Corporation':'Corporación'}. {new Date().getFullYear()+" "}
								{lang==='en'?'All rights reserved.':'reservados todos los derechos'}
							</WebsiteRights>
							<SocialIcons>
								<SocialIconLink
									href="https://www.facebook.com/profile.php?id=100085597803454"
									target="_blank"
									aria-label="Facebook"
								>
									<FaFacebook/>
								</SocialIconLink>
								<SocialIconLink
									href="https://www.instagram.com/rainyday_deals/"
									target="_blank"
									aria-label="Instagram"
								>
									<FaInstagram/>
								</SocialIconLink>
								<SocialIconLink
									href="https://twitter.com/rainyday_deals"
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
