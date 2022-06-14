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

export async function getUsuario(id) {
    try 
    {
        const response = await axiosConfig.get(`/usuarios/${id}`);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export async function createUser(usuario) {
    try 
    {
        const response = await axiosConfig.post(`/usuarios`, usuario, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(id, usuario) {
    try 
    {
        const response = await axiosConfig.put(`/usuarios/${id}`, usuario, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
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