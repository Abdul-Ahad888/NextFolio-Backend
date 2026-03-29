const fs = require('fs');
const path = require('path');
const sequelize = require('./config/dbconfig');
const Product = require('./model/product.model');

require('dotenv').config();

const importProducts = async () => {
    try {
        // Connect & sync
        await sequelize.authenticate();
        console.log('Database connected');

        await sequelize.sync({ force: true }); // set to true to drop & recreate tables
        console.log('Database synced');

        // Read products.json
        const filePath = path.join(__dirname, '../frontend/src/products.json'); // adjust if needed
        const data = fs.readFileSync(filePath, 'utf-8');
        const products = JSON.parse(data).products;

        // Insert products
        for (let product of products) {
            await Product.create(product);
        }

        console.log('Products imported successfully!');
        process.exit();
    } catch (err) {
        console.error('Error importing products:', err);
        process.exit(1);
    }
};

importProducts();
