import {FaBars} from 'react-icons/fa'
import {
	Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavButton,NavButtonLink,NavButtonMobile
} from './navbarElements'
import { useEffect, useState } from 'react';
import {animateScroll as scroll} from 'react-scroll'
import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';
import {MobileOnlyButton} from '../buttonElement'
const Navbar = ({toggle}) => {
	const[scrollNav, setScrollNav] = useState(false)
	const [hoverLang,setHoverLang] = useState(false)
	const [hoverStart,setHoverStart] = useState(false)
	const onHoverLang = () => {setHoverLang(!hoverLang)}
	const onHoverStart = () => {setHoverStart(!hoverStart)}

	const changeNav = () => {
		if(window.scrollY >= 80)
		{
			setScrollNav(true)
		}
		else
		{
			setScrollNav(false)
		}
	}

	useEffect(() =>{
		window.addEventListener('scroll', changeNav)
	},[])

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	const {lang,toggleLang} = useContext(LanguageContext);

	return(
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to='/' onClick={toggleHome}>rainyday</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="howitworks"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								{lang==='en' ? 'How it Works' : 'Cómo funciona'}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="earn"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								{lang==='en' ? 'Earn' : 'Ganar'}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="access"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								{lang==='en' ? 'Access' : 'Acceso'}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="nutshell"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								{lang==='en' ? 'In a Nutshell' : 'En una Palabra'}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="waitlist"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-100}
							>
							{lang==='en' ? 'Sign Up' : 'Inscribirse'}
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavButton>
						<NavButtonLink 
							onClick={toggleLang}
						>
							{lang==='en' ? 'Ver En Español' : 'View In English'}
						</NavButtonLink>
					</NavButton>
					<NavButtonMobile>
						<NavButtonLink 
							onClick={toggleLang}
						>
							{lang==='en' ? 'Español' : 'English'}
						</NavButtonLink>
					</NavButtonMobile>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
