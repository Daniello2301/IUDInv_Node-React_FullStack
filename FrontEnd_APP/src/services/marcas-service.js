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

export function createMarca(marca){
    try 
    {
        const response = axiosConfig.post(`/marcas`, marca);
        return response.data;       
    } catch (error) {
        console.log(error);
    }
}