// Importing mongoose library 
const mongoose = require('mongoose');

const mongoUrl = process.env;

// Function to establish connection with MongoDB using async/await
 async () => {
    try {
        // Connecting to MongoDB using Mongoose
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,         // Using new URL parser
            useUnifiedTopology: true,      // Using new Server Discover and Monitoring engine
        });
        console.log('Database is connected successfully');
    } catch (err) {
        // Error handling if database connection fails
        console.log('Error in Database connection',err);
    }
};

