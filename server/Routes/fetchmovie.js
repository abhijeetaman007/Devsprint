const express=require('express')
const router=express();
const fetch = require("node-fetch");
const movies=require('../Models/movies')


router.post('/',async (req,res)=>{
    const q="Knives out"                             //Movie Title
    const response=await fetch('http://www.omdbapi.com/?t='+q+'&plot=full&apikey=810b0757')  
    const jsonres=await response.json()
    const movie=new movies({
        title:jsonres.Title,
        year:jsonres.Year,
        rated:jsonres.Rated,
        runtime:jsonres.Runtime,
        genre:jsonres.Genre,
        director:jsonres.Director,
        writer:jsonres.Writer,
        production:jsonres.Production,
        actors:jsonres.Actors,
        plot:jsonres.Plot,
        language:jsonres.Language,
        country:jsonres.Country,
        awards:jsonres.Awards,
       // poster:jsonres.Poster,
       // type:jsonres.Type,
        imdbID:jsonres.Imdbid,
      //  Likes:jsonres.body.likes,
       // Dislikes:jsonres.body.dislikes,
       // Totalviews:jsonres.body.totalviews
    })
    try{
        const savedmovie= await movie.save();
        res.json(savedmovie)
    }
    catch(err){
        res.json({message: err})
    }
    
    
})



module.exports= router