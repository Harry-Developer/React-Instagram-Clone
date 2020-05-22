const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
 
require('dotenv').config()

//Database connection 
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("autoIndex", false);

//Models
require("./models/user");

const app = express()
const port = process.env.PORT || 3001;

app.use(cors())

const userRoutes = require('./routes/user')

//Change this if using json body 
app.use(express.json({ extended: true }))

app.use('/api/user/', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
})