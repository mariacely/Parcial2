import React from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import DetailPage from "./Pages/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {IntlProvider} from 'react-intl';
import { useState } from "react";
import en from './Locales/en.json'
import es from './Locales/es.json'
export default function App() {
  const [messages, setMessages] = useState(navigator.language === 'en'? en : es)
  return (
     <IntlProvider locale={navigator.language} messages={messages}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<LandingPage/>} />
        <Route exact path="/" element={<Login/>} />
        <Route path="foros/:foroId"element={<DetailPage/>} />
        <Route path="*" element="Not Found" />
      </Routes>
    </BrowserRouter>
    </IntlProvider>
  );
}
