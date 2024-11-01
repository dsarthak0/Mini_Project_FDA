const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

const data=[
  
        {
            "name": "Paneer Roll",
            "id": "R1",
            "price": 11.99,
            "rating": 4,
            "description": "Delicious paneer rolled in soft bread.",
            "category": "Roll"
        },
        {
            "name": "Chicken Roll",
            "id": "R2",
            "price": 5.99,
            "rating": 4,
            "description": "Spicy chicken rolled in fresh bread.",
            "category": "Roll"
        },
        {
            "name": "Veg Roll",
            "id": "R3",
            "price": 9.99,
            "rating": 5,
            "description": "Mixed vegetables rolled in a soft wrap.",
            "category": "Roll"
        },
        {
            "name": "Mt Roll",
           "id": "R4",
            "price": 12.99,
            "rating": 5,
            "description": "Mouthwatering mutton roll with spices.",
            "category": "Roll"
        },
        {
            "name": "Mutton Roll",
            "id": "R5",
            "price": 8.99,
            "rating": 4,
            "description": "Tender mutton wrapped in delicious bread.",
            "category": "Roll"
        },
        {
            "name": "Chowmein Roll",
            "id": "R6",
            "price": 10.99,
            "rating": 4,
            "description": "Chowmein rolled in a soft flatbread.",
            "category": "Roll"
        },
        {
            "name": "Spring Roll",
            "id": "R7",
            "price": 7.99,
            "rating": 4,
            "description": "Crispy spring rolls filled with veggies.",
            "category": "Roll"
        },
        {
            "name": "Sc Roll",
            "id": "R8",
            "price": 9.99,
            "rating": 5,
            "description": "Savory sc rolls with a burst of flavor.",
            "category": "Roll"
        },
        {
            "name": "Paneer Roll",
            "id": "R9",
            "price": 10.99,
            "rating": 5,
            "description": "Rich paneer rolled in a delightful wrap.",
            "category": "Roll"
        }
   
    
]

async function run() {
    try {
        await client.connect();
        const database = client.db("Dishes"); 
        const collection = database.collection("Rolls"); 
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);