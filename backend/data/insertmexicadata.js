const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; // Replace with your connection string
const client = new MongoClient(uri);

const data=[
    
        {
            "name": "Beef Tacos",
            "is": "M1",
            "price": 11.99,
            "rating": 4,
            "description": "Delicious beef tacos topped with fresh ingredients.",
            "category": "Tacos"
        },
        {
            "name": "Pozole",
            "id": "M2",
            "price": 5.99,
            "rating": 4,
            "description": "Traditional Mexican soup made with hominy and meat.",
            "category": "Soup"
        },
        {
            "name": "Tacos",
            "id": "M3",
            "price": 9.99,
            "rating": 5,
            "description": "Authentic tacos filled with a variety of flavors.",
            "category": "Tacos"
        },
        {
            "name": "Tostados",
            "id": "M4",
            "price": 12.99,
            "rating": 5,
            "description": "Crispy tostadas topped with your choice of ingredients.",
            "category": "Tostadas"
        },
        {
            "name": "Chiles-en-Nogada",
            "id": "M5",
            "price": 8.99,
            "rating": 4,
            "description": "Stuffed peppers in a creamy sauce.",
            "category": "Main Course"
        },
        {
            "name": "Grilled Corn",
            "id": "M6",
            "price": 10.99,
            "rating": 4,
            "description": "Sweet corn grilled to perfection and seasoned.",
            "category": "Sides"
        },
        {
            "name": "Enchilades",
            "id": "M7",
            "price": 7.99,
            "rating": 4,
            "description": "Rolled tortillas filled with meat and topped with sauce.",
            "category": "Main Course"
        },
        {
            "name": "Mole",
            "id": "M8",
            "price": 9.99,
            "rating": 5,
            "description": "Rich and flavorful mole sauce served with chicken.",
            "category": "Sauce"
        },
        {
            "name": "Guacomole",
            "id": "M9",
            "price": 10.99,
            "rating": 5,
            "description": "Fresh avocado dip with spices.",
            "category": "Dips"
        },
        {
            "name": "Tamales",
            "id": "M10",
            "price": 6.99,
            "rating": 4,
            "description": "Steamed corn dough filled with meats or cheese.",
            "category": "Main Course"
        }
    
    
]
async function run() {
    try {
        await client.connect();
        const database = client.db("Dishes"); 
        const collection = database.collection("Mexican");
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);