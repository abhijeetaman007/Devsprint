//Refer server->README.md for viewing all routes and their working 

const express=require('express')
const router=express();


const movies=require('../Models/movies')

//To add a movie
router.post('/add',async (req,res)=>{
    const movie=new movies({
        title:req.body.title,
        year:req.body.year,
        rated:req.body.rated,
        runtime:req.body.runtime,
        genre:req.body.genre,
        director:req.body.director,
        writer:req.body.writer,
        production:req.body.production,
        actors:req.body.actors,
        plot:req.body.plot,
        language:req.body.language,
        country:req.body.country,
        awards:req.body.awards,
        ImdbID:req.body.ImdbID,
        
    })
    try{
        const savedmovie= await movie.save();
        res.json(savedmovie)
    }
    catch(err){
        res.json({message: err})
    }
})

//To view all movies of db (connected to frontend)
router.get('/view/all',async (req,res)=>{
    try{
        const viewmovie=await movies.find()
        res.json(viewmovie)
    }
    catch(err)
    {
        res.json({message: err})
    }
})
//To view movie using its title
router.get('/view/title/:title',async(req,res)=>{
    try{
        const viewmovie= await movies.find({title:req.params.title})
        res.json(viewmovie)
    }
    catch(err){
        res.json({message: err})
    }
})
//To view movie using imdbID (connected to frontend)
router.get('/view/imdbid/:imdbid',async(req,res)=>{
    try{
        const viewmovie= await movies.find({ImdbID:req.params.imdbid})
        res.json(viewmovie)
    }
    catch(err){
        res.json({message: err})
    }
})

//Filter movies by Genre (connected to frontend)
router.get('/genre/:genretype',async(req,res)=>{
    try{
        const genrefound= await movies.find({genre:req.params.genretype})
        res.json(genrefound)
    }
    catch(err){
        res.json({message:err})
    }
})

//Filter movies by year (connected to frontend)
router.get('/year/:year',async(req,res)=>{
    try{
        const movieyearfound= await movies.find({year:req.params.year})
        res.json(movieyearfound)
    }
    catch(err){
        res.json({message:err})
    }
})

//Filter movies by Rated type (connected to frontend)
router.get('/rated/:rated',async(req,res)=>{
    try{
        const moviefound= await movies.find({rated:req.params.rated})
        res.json(moviefound)
    }
    catch(err){
        res.json({message:err})
    }
})

//Filter movie by director
router.get('/director/:director',async(req,res)=>{
    try{
        const moviefound= await movies.find({director:req.params.director})
        res.json(moviefound)
    }
    catch(err){
        res.json({message:err})
    }
})

//To delete a movie using its _id
router.delete('/delete/movieid/:movieid',async(req,res)=>{
    try{
        const deltedmovie= await movies.deleteOne({_id:req.params.movieid})
        res.json(deltedmovie)
    }
    catch(err){
        res.json({message:err})
    }
})

//To delete a movie using its title(connected to frontend)
router.delete('/delete/title/:title',async(req,res)=>{
    try{
        const deltedmovie= await movies.deleteOne({title:req.params.title})
        res.json(deltedmovie)
    }
    catch(err){
        res.json({message:err})
    }
})

//To update details of a movie using its title
router.patch('/update/:title',async (req,res)=>{
    try{
        const updatedmovie= await movies.updateMany(
            {title:req.params.title},
            {$set:{
                title:req.body.title,
                year:req.body.year,
                rated:req.body.rated,
                runtime:req.body.runtime,
                genre:req.body.genre,
                director:req.body.director,
                writer:req.body.writer,
                production:req.body.production,
                actors:req.body.actors,
                plot:req.body.plot,
                language:req.body.language,
                country:req.body.country,
                awards:req.body.awards,
                ImdbID:req.body.ImdbID,
            },
        })
        res.json(updatedmovie)
    }
    catch(error){
        res.json({message: error})
    }
})




module.exports= router