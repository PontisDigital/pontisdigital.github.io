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
					<SidebarLink to="earn" onClick={toggle}>
						Earn
					</SidebarLink>
					<SidebarLink to="access" onClick={toggle}>
						Access
					</SidebarLink>
					<SidebarLink to="nutshell" onClick={toggle}>
						In a Nutshell
					</SidebarLink>
					<SidebarLink to="waitlist" onClick={toggle}>
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
