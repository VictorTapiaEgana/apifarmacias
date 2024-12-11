import dbClient from '../config/dbClient.js'
 
async function listadoComunas() {      

    let client;
    
    try {        

        client = await dbClient()
        
        const coll =  client.db('farmaciascihle').collection('farmacias');

        const cursor = await coll.distinct("comuna_nombre")        

        await client.close();

        return cursor
        
    } catch (error) {
        
    } finally {

        await client.close()
    }
      
        

    }

export default listadoComunas;