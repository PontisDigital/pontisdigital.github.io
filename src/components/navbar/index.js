import {FaBars} from 'react-icons/fa'
import {
	Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavButton,NavButtonLink
} from './navbarElements'
import { useEffect, useState } from 'react';
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
	const[scrollNav, setScrollNav] = useState(false)

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
							<NavLinks to="earn"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset{...-80}
							>Earn</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="access"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset{...-80}
							>Access</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="nutshell"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset{...-80}
							>Nutshell</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="waitlist"
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset{...-80}
							>Sign Up</NavLinks>
						</NavItem>
					</NavMenu>
					<NavButton>
						<NavButtonLink to="/login">
							Log In
						</NavButtonLink>
					</NavButton>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
