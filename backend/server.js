const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const app = express();
const PORT = 3000;

dotenv.config(); 

const userRoutes = require('./routes/User'); 
const paymentRoutes = require('./routes/Payment'); 




mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  


  
const corsOptions = {
  origin: 'http://localhost:3001', 
  methods: 'GET,POST,PUT,DELETE,OPTIONS', 
  allowedHeaders: 'Content-Type,Authorization', 
};





// Middleware
app.use(cors(corsOptions));
app.use(express.json()); 

// Routes
app.use('/api', userRoutes); 
app.use('/api', paymentRoutes); 







app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});












