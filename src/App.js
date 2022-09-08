import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import LoginPage from './pages/login';

import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom} from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Github, Google, Facebook, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";
import axios from "axios";

import {LanguageProvider} from './LanguageContext';

function App() {
SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "Rainyday",
        apiDomain: "https://api.pontis.digital",
        websiteDomain: "https://rainyday.deals",
        apiBasePath: "/auth",
        websiteBasePath: "/login"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    Github.init(),
                    Google.init(),
                    Facebook.init(),
                    Apple.init(),
                ]
            }
        }),
        Session.init()
    ]
});

	let axiosInstance = axios.create({
		baseURL: 'https://api.pontis.digital/',
		timeout: 1000,
		headers: {'Content-Type': 'application/json'}
	})
	Session.addAxiosInterceptors(axiosInstance);

  return (
	  <LanguageProvider>
		  <SuperTokensWrapper>
			  <Router>
				  <Routes>
					  <Route path="/" element={<Home/>}/>
					  {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
				  </Routes>
			  </Router>
		  </SuperTokensWrapper>
	  </LanguageProvider>
  );
}

export default App;
