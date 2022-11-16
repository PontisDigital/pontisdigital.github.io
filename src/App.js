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
    return(
                <LanguageProvider>
                  <BrowserRouter basename="/">
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/login" element={<LoginPage/>}/>
                          <Route path="/faq" element={<FaqPage/>}/>
                      </Routes>
                  </BrowserRouter>
              </LanguageProvider>
);
}

export default App;
