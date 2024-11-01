const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://sarthakdhanvate783:Sarthakd007@cluster0.txjgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; /
const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

const data=[
    
        {
            "name": "BarBeque",
            "id": "P1",
            "price": 11.99,
            "rating": 4,
            "description": "Delicious barbecue with smoky flavor.",
            "category": "Main Course"
        },
        {
            "name": "Schezwan",
            "id": "P2",
            "price": 5.99,
            "rating": 4,
            "description": "Spicy Schezwan dish with bold flavors.",
            "category": "Main Course"
        },
        {
            "name": "Tandoori Paneer",
            "id": "P3",
            "price": 9.99,
            "rating": 5,
            "description": "Marinated paneer grilled to perfection.",
            "category": "Main Course"
        },
        {
            "name": "Chicken Tikka",
            "id": "P4",
            "price": 12.99,
            "rating": 5,
            "description": "Tender chicken marinated and grilled.",
            "category": "Main Course"
        },
        {
            "name": "Veggie Supreme",
            "id": "P5",
            "price": 8.99,
            "rating": 4,
            "description": "A wholesome mix of vegetables.",
            "category": "Main Course"
        },
        {
            "name": "Murg Makhini",
            "id": "P6",
            "price": 10.99,
            "rating": 4,
            "description": "Creamy chicken dish with rich spices.",
            "category": "Main Course"
        },
        {
            "name": "Cheesy Mushroom",
            "id": "P7",
            "price": 7.99,
            "rating": 4,
            "description": "Mushrooms topped with melted cheese.",
            "category": "Main Course"
        },
        {
            "name": "Tandoori",
            "id": "P8",
            "price": 9.99,
            "rating": 5,
            "description": "Authentic tandoori dish with aromatic spices.",
            "category": "Main Course"
        },
        {
            "name": "Mexican Feista",
            "id": "P9",
            "price": 10.99,
            "rating": 5,
            "description": "Vibrant Mexican dish with assorted flavors.",
            "category": "Main Course"
        },
        {
            "name": "Margherita",
            "id": "P10",
            "price": 6.99,
            "rating": 4,
            "description": "Classic Margherita pizza with fresh ingredients.",
            "category": "Pizza"
        },
        {
            "name": "American Cheesy",
            "id": "P11",
            "price": 8.99,
            "rating": 5,
            "description": "Rich and cheesy American-style dish.",
            "category": "Main Course"
        }
    
    
]

async function run() {
    try {
        await client.connect();
        const database = client.db("Dishes"); 
        const collection = database.collection("Pizza"); 
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
