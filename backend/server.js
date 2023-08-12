const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8085;
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
app.use(cors("*"));
app.use(express.json());
app.use("/products", productRouter);
app.use("/user", userRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
