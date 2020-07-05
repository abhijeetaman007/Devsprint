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
        poster:req.body.poster,
        type:req.body.type,
        ImdbID:req.body.imdbid,
        
    })
    try{
        const savedmovie= await movie.save();
        res.json(savedmovie)
    }
    catch(err){
        res.json({message: err})
    }
})

//To view all movies of db
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
        const viewmovie= await movies.find({Title:req.params.title})
        res.json(viewmovie)
    }
    catch(err){
        res.json({message: err})
    }
})
//To view movie using imdbID
router.get('/view/imbdid/:imdbid',async(req,res)=>{
    try{
        const viewmovie= await movies.find({imdbID:req.params.imdbid})
        res.json(viewmovie)
    }
    catch(err){
        res.json({message: err})
    }
})

//Filter movies by Genre
router.get('/genre/:genretype',async(req,res)=>{
    try{
        const genrefound= await movies.find({Genre:req.params.genretype})
        res.json(genrefound)
    }
    catch(err){
        res.json({message:err})
    }
})

//Filter movies by year
router.get('/year/:year',async(req,res)=>{
    try{
        const movieyearfound= await movies.find({Year:req.params.year})
        res.json(movieyearfound)
    }
    catch(err){
        res.json({message:err})
    }
})

//Filter movies by Rated type
router.get('/rated/:rated',async(req,res)=>{
    try{
        const moviefound= await movies.find({Rated:req.params.rated})
        res.json(moviefound)
    }
    catch(err){
        res.json({message:err})
    }
})

//Filter movie by director
router.get('/director/:director',async(req,res)=>{
    try{
        const moviefound= await movies.find({Director:req.params.director})
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

//To delete a movie using its title
router.delete('/delete/title/:title',async(req,res)=>{
    try{
        const deltedmovie= await movies.deleteOne({Title:req.params.title})
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
            {Title:req.params.title},
            {$set:{
                Title:req.body.title,
                Year:req.body.year,
                Rated:req.body.rated,
                Runtime:req.body.runtime,
                Genre:req.body.genre,
                Director:req.body.director,
                Writer:req.body.writer,
                Production:req.body.production,
                Actors:req.body.actors,
                Plot:req.body.plot,
                Language:req.body.language,
                Country:req.body.country,
                Awards:req.body.awards,
                Type:req.body.type,
                imdbID:req.body.imdbid,
                Likes:req.body.likes,
                Dislikes:req.body.dislikes,
                Totalviews:req.body.totalviews
            },
        })
        res.json(updatedmovie)
    }
    catch(error){
        res.json({message: error})
    }
})




module.exports= router