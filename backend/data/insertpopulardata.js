const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

const data=[
    
        {
            "name": "Tacos",
            "id": "1",
            "price": 10.99,
            "rating": 4,
            "description": "Delicious tacos filled with fresh ingredients.",
            "category": "Main Course"
        },
        {
            "name": "Buns",
            "id": "2",
            "price": 5.99,
            "rating": 4,
            "description": "Soft and fluffy buns, perfect for any meal.",
            "category": "Baked Goods"
        },
        {
            "name": "Greek Salad",
            "id": "3",
            "price": 8.99,
            "rating": 4,
            "description": "Fresh Greek salad with olives and feta cheese.",
            "category": "Salad"
        },
        {
            "name": "Pasta",
            "id":"4",
            "price": 12.99,
            "rating": 5,
            "description": "Rich and creamy pasta, a classic favorite.",
            "category": "Main Course"
        },
        {
            "name": "Margarita Pizza",
            "id": "5",
            "price": 14.99,
            "rating": 5,
            "description": "Classic Margherita pizza with fresh basil and mozzarella.",
            "category": "Pizza"
        }
    
    
]

async function run() {
    try {
        await client.connect();
        const database = client.db("Dishes"); 
        const collection = database.collection("Popular"); 
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);