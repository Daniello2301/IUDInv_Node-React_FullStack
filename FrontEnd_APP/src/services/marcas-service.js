import { axiosConfig } from '../helpers/axios-config';


export async function getMarcas() {
    try 
    {
        const response = await axiosConfig.get(`/marcas`);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export async function getMarca(id){
    try {
        const response = await axiosConfig.get(`/marcas/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function createMarca(marca){
    try 
    {
        const response = await axiosConfig.post(`/marcas`, marca);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}

export async function updateMarca(id, marca){
    try 
    {
        const response = await axiosConfig.put(`/marcas/${id}`, marca);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}

export async function deleteMarca(id){
    try 
    {
        const response = await axiosConfig.delete(`/marcas/${id}`);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}