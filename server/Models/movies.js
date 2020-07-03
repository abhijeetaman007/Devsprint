const mongoose =require('mongoose')

const movieSchema=mongoose.Schema({
        Title:{
            type:String,
            require:true,
            trim:true,
        },
        Year:{
            type:String,
            default:"Year not known"
        },
        Rated:{
            type:String,
            default:"Unknown"
        },
        Runtime:{
            type:String,
            default:"Unknown"
        },
        Genre:{
            type:String,
            default:"Unknown"
        },
        Director:{
            type:String,
            default:"Unknown",
            trim: true
        },
        Writer:{
            type:String,
            default:"Unknown",
            trim: true
        },
        Production:{
            type:String,
            default:"Unknown",
            trim: true
        },
        Actors:{
            type:String,
            default:"Unknown",
            trim: true
        },
        Plot:{
            type:String,
            default:"Unknown",
        },
        Language:{
            type:String,
            default:"Unknown",
            trim: true
        },
        Country:{
            type:String,
            default:"Unknown",
            trim: true
        },
        Awards:{
            type:String,
            default:"No awards",
        },
        Type:{
            type:String,
            default:"Unknown",
        },
        imdbID:{
            type:String,
            default:"Unknown"
        },
        Likes:{
            type:Number,
            default: 0
        },
        Dislikes:{
            type:Number,
            default: 0
        },
        Totalviews:{
            type:Number,
            default: 0            
        }
})

module.exports=mongoose.model('movies',movieSchema)