const express = require('express');
const dotenv = require('dotenv').config();
const cors= require ('cors');
const {mongoose} = require('mongoose');
const app = express();
mongoose.connect ("mongodb://127.0.0.1:27017/mern_auth").then(()=> console.log("database connected")).catch((err)=> console.log("database not connected", err))
 

app.use(express.json())

app.use('/', require('./Routes/authRoutes'))
const port = 8000;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));