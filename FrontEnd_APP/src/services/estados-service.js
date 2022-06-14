import { axiosConfig } from "../helpers/axios-config"; 

export async function getEstados() {
    try {
        const response = await axiosConfig.get(`/estados`);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export async function createEstado(estado){
    try {
        const response = await axiosConfig.post(`/estados`, estado);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}

export async function updateEstado(estado){
    try {
        const response = await axiosConfig.put(`/estados/${estado._id}`, estado);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}

export async function deleteEstado(id){
    try {
        const response = await axiosConfig.delete(`/estados/${id}`);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}