const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

//Middleware

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(fileUpload({
    useTempFiles:true,
}))

const PORT = process.env.PORT || 5000;



app.get('/', (req,res) => {
    res.json({msg:'This is example'})
})

app.listen(PORT, () => {
    console.log("Server is listening")
})



//Routes

app.use('/user',require('./routes/useRoutes'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))

//Connect MONGODB

const URI = process.env.MONGODB_URL;

mongoose.connect(URI,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS:30000 //Increased timeout by 30000
}).then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log(err)
})