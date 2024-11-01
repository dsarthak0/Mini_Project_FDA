const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

const data=[
    
        {
            "name": "Tossed",
            "id": "S1",
            "price": 11.99,
            "rating": 4,
            "description": "A fresh tossed salad with a variety of greens.",
            "category": "Salad"
        },
        {
            "name": "Caesar",
            "id": "S2",
            "price": 5.99,
            "rating": 4,
            "description": "Classic Caesar salad with croutons and parmesan.",
            "category": "Salad"
        },
        {
            "name": "Leafy Green",
            "id": "S3",
            "price": 9.99,
            "rating": 5,
            "description": "Nutritious leafy greens with a light dressing.",
            "category": "Salad"
        },
        {
            "name": "Greek",
            "id": "S4",
            "price": 12.99,
            "rating": 5,
            "description": "Traditional Greek salad with olives and feta.",
            "category": "Salad"
        },
        {
            "name": "Fatoush",
            "id": "S5",
            "price": 8.99,
            "rating": 4,
            "description": "Middle Eastern salad with toasted pita and mixed greens.",
            "category": "Salad"
        },
        {
            "name": "Nicoise",
            "id": "S6",
            "price": 10.99,
            "rating": 4,
            "description": "French salad with tuna, olives, and green beans.",
            "category": "Salad"
        },
        {
            "name": "Chicken Salad",
            "id": "S7",
            "price": 7.99,
            "rating": 4,
            "description": "Creamy chicken salad served on a bed of greens.",
            "category": "Salad"
        },
        {
            "name": "Tandoori",
            "id": "S8",
            "price": 9.99,
            "rating": 5,
            "description": "Spicy tandoori salad with marinated chicken.",
            "category": "Salad"
        }
    
    
]

async function run() {
    try {
        await client.connect();
        const database = client.db("Dishes"); 
        const collection = database.collection("Salad"); 
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);