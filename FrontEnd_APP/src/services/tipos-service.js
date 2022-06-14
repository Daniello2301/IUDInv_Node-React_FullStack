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

export async function updateTipo(tipo){
    try 
    {
        const response = await axiosConfig.put(`/tipos/${tipo._id}`, tipo);
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