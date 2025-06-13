const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data.json');


const getAllProducts = (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    const responseData = parsedData.products.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        rating: product.rating,
        reviews: product.reviews.length,
        variants: product.variants.length
    }))
    res.status(200).json(responseData);
}

const getProduct = (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    const responseData = parsedData.products.find(product => {
        return Number(req.params.id) === product.id;
    })
    res.status(200).json(responseData);
}

module.exports = { getAllProducts, getProduct };