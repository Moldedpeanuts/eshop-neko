const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // set before connecting to mongodb to prevent filtering out queries
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

connectToMongo(); // before starting server attempt to connect to database

app.listen(port, () => {
    console.log(`App listening to ${port}`);
}); 


async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB successful connection!');
     } catch(error) {
         console.log('MongoDB connection error:', error);
     }
}
