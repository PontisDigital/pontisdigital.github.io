import {FaBars} from 'react-icons/fa'
import {
	Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavButton,NavButtonLink
} from './navbarElements'
const Navbar = props => {
	return(
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>rainyday</NavLogo>
					<MobileIcon>
						<FaBars/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="discover">Discover</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="services">Services</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="signup">Sign Up</NavLinks>
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
