import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages'

import {LanguageProvider} from './LanguageContext';
import LoginPage from './pages/login';
import FaqPage from './pages/faq';
import PrivacyPage from './pages/privacy';
import SupportPage from './pages/support';
import MerchantPage from './pages/merchant';

function App() {
    return(
                <LanguageProvider>
                  <BrowserRouter basename="/">
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/login" element={<LoginPage/>}/>
                          <Route path="/faq" element={<FaqPage/>}/>
                          <Route path="/support" element={<SupportPage/>}/>
						  <Route path="/privacy-policy" element={<PrivacyPage/>}/>
						  <Route path="/solution" element={<MerchantPage/>}/>
                      </Routes>
                  </BrowserRouter>
              </LanguageProvider>
);
}

export default App;
