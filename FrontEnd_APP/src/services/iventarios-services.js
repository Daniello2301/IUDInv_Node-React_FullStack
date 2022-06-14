import { axiosConfig } from "../helpers/axios-config";


export async function getInventarios(){
    try {
        const response = await axiosConfig.get(`/inventarios`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}