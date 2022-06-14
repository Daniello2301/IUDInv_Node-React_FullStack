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

export async function updateUser(usuario) {
    try 
    {
        const response = await axiosConfig.put(`/usuarios/${usuario._id}`, usuario);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(id) {
    try 
    {
        const response = await axiosConfig.delete(`/usuarios/${id}`);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}