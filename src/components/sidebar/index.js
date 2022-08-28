import { SidebarContainer, Icon, CloseIcon, SidebarRoute,SidebarWrapper,SidebarMenu,SidebarLink, SideButtonWrap} from "./sidebarElements"
const Sidebar = ({isOpen, toggle}) => {
	return(
		<>
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon/>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="discover" onClick={toggle}>
						Discover
					</SidebarLink>
					<SidebarLink to="services" onClick={toggle}>
						Services
					</SidebarLink>
					<SidebarLink to="signup" onClick={toggle}>
						Sign Up
					</SidebarLink>
				</SidebarMenu>
				<SideButtonWrap>
					<SidebarRoute to="login">
						Log In
					</SidebarRoute>
				</SideButtonWrap>
			</SidebarWrapper>
		</SidebarContainer>
		</>
	)
}

export default Sidebar
