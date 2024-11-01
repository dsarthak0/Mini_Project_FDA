const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const data = [
    
        {
            "name": "Cake",
            "id": "D1",
            "price": 11.99,
            "rating": 4,
            "description": "Delicious and moist cake.",
            "category": "Dessert"
        },
        {
            "name": "Cookies",
            "id": "D2",
            "price": 5.99,
            "rating": 4,
            "description": "Crispy and chewy cookies.",
            "category": "Dessert"
        },
        {
            "name": "Biscuits",
            "id": "D3",
            "price": 9.99,
            "rating": 5,
            "description": "Flaky biscuits, perfect with tea.",
            "category": "Dessert"
        },
        {
            "name": "Pastries",
            "id": "D4",
            "price": 12.99,
            "rating": 5,
            "description": "Freshly baked pastries with various fillings.",
            "category": "Dessert"
        },
        {
            "name": "Candies",
            "id": "D5",
            "price": 8.99,
            "rating": 4,
            "description": "Sweet and colorful candies.",
            "category": "Dessert"
        },
        {
            "name": "Pudding",
            "id": "D6",
            "price": 10.99,
            "rating": 4,
            "description": "Creamy and rich pudding.",
            "category": "Dessert"
        },
        {
            "name": "Deep Fried Min",
            "id": "D7",
            "price": 7.99,
            "rating": 4,
            "description": "Crispy and savory deep-fried min.",
            "category": "Snack"
        },
        {
            "name": "Ice Cream",
            "id": "D8",
            "price": 9.99,
            "rating": 5,
            "description": "Rich and creamy ice cream.",
            "category": "Dessert"
        },
        {
            "name": "Chocolate Pudding",
            "id": "D9",
            "price": 10.99,
            "rating": 5,
            "description": "Decadent chocolate pudding.",
            "category": "Dessert"
        },
        {
            "name": "Gelatin",
            "id": "D10",
            "price": 6.99,
            "rating": 4,
            "description": "Light and refreshing gelatin dessert.",
            "category": "Dessert"
        }
    
    
  
];

async function run() {
    try {
        await client.connect();
        const database = client.db("Dishes"); 
        const collection = database.collection("Desert"); 
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
