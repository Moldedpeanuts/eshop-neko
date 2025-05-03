require('dotenv').config();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // set before connecting to mongodb to prevent filtering out queries

const express = require('express');
const app = express();
app.use(express.json());

const session = require('./middleware/session');
app.use(session);

const productRoutes = require('./routes/products'); // import router before starting server
app.use('/products', productRoutes);

const authRoutes = require('./routes/login');
app.use('/login', authRoutes);

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