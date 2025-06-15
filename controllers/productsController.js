const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data.json');


const getAllProducts = (req, res) => {
    try {
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

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }

}

const getProduct = (req, res) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const parsedData = JSON.parse(data);
        const responseData = parsedData.products.find(product => {
            return Number(req.params.id) === product.id;
        })
        res.status(200).json(responseData);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { getAllProducts, getProduct };