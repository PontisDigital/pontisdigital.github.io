import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Home from './pages'

import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom} from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Github, Google, Facebook, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import axios from "axios";

import {LanguageProvider} from './LanguageContext';
import LoginPage from './pages/login';
import FaqPage from './pages/faq';

function App() {
SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "Rainyday",
        apiDomain: "htts://api.rainyday.deals/stokens",
        websiteDomain: "https://rainyday.deals",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
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
		baseURL: 'https://api.rainyday.deals/',
		timeout: 1000,
		headers: {'Content-Type': 'application/json'}
	})
	Session.addAxiosInterceptors(axiosInstance);

/*
  return (
	  <LanguageProvider>
		  <SuperTokensWrapper>
			  <BrowserRouter>
				  <Routes>
					  <Route path="/" element={<Home/>}/>
					  <Route path="/login" element={<Home/>}/>
					  {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
				  </Routes>
			  </BrowserRouter>
		  </SuperTokensWrapper>
	  </LanguageProvider>
  );
  */
if (SuperTokens.canHandleRoute()) {
            // This renders the login UI on the /auth route
            return SuperTokens.getRoutingComponent()
}
ReactDOM.createRoot(document.getElementById('root')).render(
      <SuperTokensWrapper>
                <LanguageProvider>
                  <BrowserRouter basename="/">
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/login" element={<LoginPage/>}/>
                          <Route path="/faq" element={<FaqPage/>}/>
                      </Routes>
                  </BrowserRouter>
              </LanguageProvider>
      </SuperTokensWrapper>
);
}

export default App;
