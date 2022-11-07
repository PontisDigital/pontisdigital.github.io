import { useState } from 'react'
import {faqData} from './faqData'
import { IconContext } from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'
import {AccordionSection, Container, Wrap, Dropdown} from './accordionElements'
import LanguageContext from '../../LanguageContext';
import { useContext } from 'react';

const Accordion = () =>
{
	const {lang} = useContext(LanguageContext);
	const[clicked,setClicked] = useState(false)
	const toggle = index => {
		if(clicked === index)
		{
			// close it if it's open
			return setClicked(null)
		}
		setClicked(index);
	}
	return(
		<IconContext.Provider value={{color: '#6a779b',size: '25px'}}>
			<AccordionSection>
				<Container>
					{faqData.map((item,index)=>{
						return(
							<>
								<Wrap onClick={()=> toggle(index)} key={index}>
									<h1>{lang === 'en' ? item.questionEng : item.questionEsp}</h1>
									<span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
								</Wrap>
								{
									clicked === index ? (
										<Dropdown>
											<p>{lang === 'en' ? item.answerEng : item.answerEsp}</p>
										</Dropdown>
									) : null
								}
							</>
						)
					})}
				</Container>
			</AccordionSection>
		</IconContext.Provider>
	)
}

export default Accordion
