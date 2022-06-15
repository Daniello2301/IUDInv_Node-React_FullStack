import { axiosConfig } from '../helpers/axios-config';

export async function getTipos() {
    try 
    {
        const response = await axiosConfig.get(`/tipos`);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export async function createTipo(tipo){
    try 
    {
        const response = await axiosConfig.post(`/tipos`, tipo);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}

export async function getTipoEquipo(id){
    try 
    {
        const response = await axiosConfig.get(`/tipos/${id}`);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}

export async function updateTipo(id, tipo){
    try 
    {
        const response = await axiosConfig.put(`/tipos/${id}`, tipo);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTipo(id){
    try 
    {
        const response = await axiosConfig.delete(`/tipos/${id}`);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}