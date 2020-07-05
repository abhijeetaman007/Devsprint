const express =require('express')
const app=express()
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const moviesroute=require('./Routes/movies')
const fetchmoviesroute=require('./Routes/fetchmovie')
const cors = require('cors');

app.use(cors());

//Middleware-to get post request body in Json
app.use(bodyparser.json())

//Connecting to mongo db
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb',{ useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
    if((!err))
    console.log("Successfully Connected to database")
    else
    console.log("Error connecting to database")
})

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
})

//Middleware for movies
app.use('/movies',moviesroute)

//Middleware for fetching movies to db
app.use('/fetchmovies',fetchmoviesroute)

//Listening at post 5000
app.listen(5000,()=>{
    console.log("Server is up and running at port 5000")
})
