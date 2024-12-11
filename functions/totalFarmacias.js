import dbClient from "../config/dbClient.js";

    async function totalFarmacias() {        

        let client;

        try {

            client = await dbClient()

            const coll = client.db('farmaciascihle').collection('farmacias');

            const totalRegistros = await coll.countDocuments();
        
            return totalRegistros;

        } catch (error) {

            return "Error al conectar a la BBDD"
            
        } finally {

            await client.close();

        }                

    }

export default totalFarmacias;