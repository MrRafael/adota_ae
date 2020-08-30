import React, { createContext, useState, useEffect, useContext } from 'react';
import * as atuh from '../services/auth';
import api from '../services/api';

interface User {
    id: number,
    nome: string,
    email: string,
    estado: string,
    cidade: string
}

interface AuthContextData {
    logged: boolean,
    user: User | null,
    login(name: string, email: string): Promise<void>,
    logout(): Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storageUser = localStorage.getItem('@petfinder:user');
        const storageToken = localStorage.getItem('@petfinder:token');

        if (storageUser !== 'undefined' && storageToken !== 'undefined') {
            setUser(JSON.parse(storageUser as string))
            api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;
        }
    }, []);

    async function login(email: string, password: string) {
        try {
            const response = await atuh.login(email, password)

            setUser(response.user);

            api.defaults.headers["Authorization"] = `Bearer ${response.token}`;

            localStorage.setItem('@petfinder:user', JSON.stringify(response.user));
            localStorage.setItem('@petfinder:token', response.token);
        } catch (error) {
            alert("Usuario ou senha incorretos!")
        }
    }

    async function logout() {
        localStorage.clear();
        setUser(null);
        api.defaults.headers["Authorization"] = ``;
    }

    return (
        <AuthContext.Provider value={{ logged: Boolean(user), user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}