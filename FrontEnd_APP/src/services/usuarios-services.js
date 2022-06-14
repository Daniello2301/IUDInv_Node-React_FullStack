import { axiosConfig } from '../helpers/axios-config';

export async function getUsuarios() {
    try 
    {
        const response = await axiosConfig.get(`/usuarios`);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export async function createUser(usuario) {
    try 
    {
        const response = await axiosConfig.post(`/usuarios`, usuario);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}