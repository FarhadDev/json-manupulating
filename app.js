const express = require('express');
const app = express();
const checkUserAgent = require('./middlewares/userAgentMiddleware');
const productsRoute = require('./routes/productsRoute');

const PORT = 3000;

app.use(express.json());
app.use(checkUserAgent);
app.use(productsRoute);


app.listen(PORT, () => { console.log(`Server is running at port ${PORT}`) })