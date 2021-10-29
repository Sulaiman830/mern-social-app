const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
//     console.log("Connected to the database");
// })

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function (err, resp) {
    console.log('MongoDB Connected successfully.');
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
 
app.get("/", (req, res) => {
    res.send("Welcome to homepage!");
})

app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);

app.listen(8080, () => {
    console.log(`Server is running on Port: 8080`)
})