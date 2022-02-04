import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import PasswordRecovery from "../containers/PasswordRecovery";
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import '../styles/global.scss';

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Login" element={<Login/>} />
                    <Route exact path="/PasswordRecovery" element={<PasswordRecovery/>} />
                    <Route element={<NotFound/>} />
                </Layout>
            </Routes>
            <Layout>
                <Login />
                <PasswordRecovery />
            </Layout>
        </BrowserRouter>
    );
}

export default App;