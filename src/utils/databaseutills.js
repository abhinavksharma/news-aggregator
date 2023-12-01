require('dotenv').config();

// dbUtils.js

const mongoose = require('mongoose');
 // Load environment variables from .env file

async function getdbClient() {
  const uri = process.env.DATABASE_URI; // Replace with your MongoDB connection URI

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Connected to MongoDB');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = { getdbClient };

