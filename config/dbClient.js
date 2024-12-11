import { MongoClient } from 'mongodb';

async function dbClient () {
    
    const { DBPASS, DBUSER, DBNAME, DBTABLE } = process.env;

    const client = await MongoClient.connect(
        `mongodb+srv://${DBUSER}:${DBPASS}@${DBNAME}.xs2v4.mongodb.net/?retryWrites=true&w=majority&appName=${DBTABLE}`
    );

    return client

}

export default dbClient;