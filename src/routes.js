import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'; 

import Home from './pages/home';
import Login from './pages/login';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    );
}