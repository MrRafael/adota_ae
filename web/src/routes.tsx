import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Singup from './pages/Singup';
import Login from './pages/Login';
import PetList from './pages/PetList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/singup" component={Singup} />
            <Route path="/login" component={Login} />
            <Route path="/petlist" component={PetList} />
        </BrowserRouter>
    );
}

export default Routes;