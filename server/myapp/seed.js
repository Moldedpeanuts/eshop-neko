require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const { faker } = require('@faker-js/faker');

async function seedDatabase() {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();

    const products = [];

    for(let i = 0; i < 50; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price({min: 5, max:100})),
            description: faker.commerce.productDescription(),
            imageUrl: faker.image.urlPicsumPhotos(),
            category: faker.commerce.department(),
            stockQuantity: faker.number.int({ min: 0, max: 100}),
            creation: faker.date.past(),
        });
    }

    await Product.insertMany(products);
    console.log('Database seeded with 50 products');
}

seedDatabase()
    .then(() => console.log('Seeding complete'))
    .catch((err) => console.error('Seeding error:', err))
    .finally(() => mongoose.connection.close());