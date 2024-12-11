import dbClient from '../config/dbClient.js';

async function obtenerLocalidadesPorComuna(comunaNombre) {
    
    let client;    

    try {

        client = await dbClient();

        const coll = client.db('farmaciascihle').collection('farmacias');
        
        const localidades = await coll.distinct("localidad_nombre", { comuna_nombre: comunaNombre });

        return localidades;
        
    } catch (error) {

        console.error('Error al obtener localidades por comuna:', error);
        throw error;

    } finally {

        await client.close(); 

    }
}

export default obtenerLocalidadesPorComuna;
