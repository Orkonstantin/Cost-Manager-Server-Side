const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Add middleware to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./middleware/responses"));
app.use("/", require("./routes"));

// Connect to the database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error('There was an error:\n'+err));

// Start the server on port 3000
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});