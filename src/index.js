import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <App />    
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


