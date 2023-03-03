import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainNavbar from './components/MainNavbar';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <MainNavbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
