import { Cp } from "./interfaces";

export async function getAdresses(cp:string):Promise<Cp[]>{
    try {
        const responseApi = await fetch(`${process.env.REACT_APP_url}/cp/${cp}`,{
          headers:{
            'X-RapidAPI-Key': '456ca3b344msh39bdc986ed3f119p185155jsne9527606eace',
            'X-RapidAPI-Host': 'codigos-postales-mx.p.rapidapi.com'
          },
          method:"GET"
        });
        
        const adresses = await responseApi.json();

        if(responseApi.ok && responseApi.status === 200){
            return adresses;
        }

        return []

    } catch (error) {
        return [];
    }
}