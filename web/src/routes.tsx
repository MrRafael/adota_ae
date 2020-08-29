import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Singup from './pages/Singup';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/singup" component={Singup} />
        </BrowserRouter>
    );
}

export default Routes;