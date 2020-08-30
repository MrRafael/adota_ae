import api from "./api";

interface Response {
    token: string,
    user: {
        id: number,
        nome: string,
        email: string,
        estado: string,
        cidade: string
    }
}

export async function login(email: string, password: string): Promise<Response> {
    const response: any = await api.post('session', { email, password });
    return response.data as Response;
}