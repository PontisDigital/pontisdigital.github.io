import {createContext, useState} from "react";

const LanguageContext = createContext();

export function LanguageProvider({children})
{
	const [lang,setLang] = useState('es');
	const toggleLang = () =>{
		setLang(lang==='es'?'en':'es');
	};
	return (
		<LanguageContext.Provider value={{lang,toggleLang}}>{children}</LanguageContext.Provider>
	);
}

export default LanguageContext;
