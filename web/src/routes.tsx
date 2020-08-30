import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Singup from './pages/Singup';
import Login from './pages/Login';
import PetList from './pages/PetList';
import { AuthProvider } from './contexts/auth';
import PetForm from './pages/PetForm';

function Routes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path="/singup" component={Singup} />
                <Route path="/login" component={Login} />
                <Route path="/petlist" component={PetList} />
                <Route path="/petform" component={PetForm} />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default Routes;