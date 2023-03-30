import * as mongoDB from "mongodb";

export const collections: { 
    products?: mongoDB.Collection, 
    users?: mongoDB.Collection, 
} = {}

export async function connectToDatabase (URI: string) {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(URI);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db("MedBakery");
   
    const productCollection: mongoDB.Collection = db.collection("products");
    const userCollection:    mongoDB.Collection = db.collection("users");
 
    collections.products  = productCollection;
    collections.users     = userCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${productCollection.collectionName}`);
 }