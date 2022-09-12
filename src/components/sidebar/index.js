import { SidebarContainer, Icon, CloseIcon, SidebarRoute,SidebarWrapper,SidebarMenu,SidebarLink, SideButtonWrap} from "./sidebarElements"

import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';
const Sidebar = ({isOpen, toggle}) => {
	const {lang} = useContext(LanguageContext);
	return(
		<>
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon/>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="howitworks" onClick={toggle}>
					{lang==='en' ? 'How it Works' : 'Cómo funciona'}
					</SidebarLink>
					<SidebarLink to="earn" onClick={toggle}>
					{lang==='en' ? 'Earn' : 'Ganar'}
					</SidebarLink>
					<SidebarLink to="access" onClick={toggle}>
					{lang==='en' ? 'Access' : 'Acceso'}
					</SidebarLink>
					<SidebarLink to="nutshell" onClick={toggle}>
					{lang==='en' ? 'In a Nutshell' : 'En una Palabra'}
					</SidebarLink>
					<SidebarLink to="waitlist" onClick={toggle}>
					{lang==='en' ? 'Sign Up' : 'Inscribirse'}
					</SidebarLink>
				</SidebarMenu>
				<SideButtonWrap>
					<SidebarRoute to="waitlist" onClick={toggle}>
						Sign Up
					</SidebarRoute>
				</SideButtonWrap>
			</SidebarWrapper>
		</SidebarContainer>
		</>
	)
}

export default Sidebar
