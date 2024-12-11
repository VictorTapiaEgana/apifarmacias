import dbClient from "../config/dbClient.js"

async function farmaciasporlocalidad(localidad)  {

    let client;
    
    try {

        client = await dbClient();

        const coll = client.db('farmaciascihle').collection('farmacias');
        
        const farmacias = await coll.find({ localidad_nombre: localidad }).toArray();

        return farmacias

        
    } catch (error) {

        return "Error al conectar a la BBDD"
        
    } finally {

       await client.close()

    }
  
}

export default farmaciasporlocalidad