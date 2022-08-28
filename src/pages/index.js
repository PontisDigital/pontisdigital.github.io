import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useState } from 'react';

const Home = () => {
	const [isOpen,setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen);
	}
	return(
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
		</>
	)
}

export default Home
