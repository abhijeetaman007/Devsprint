const mongoose =require('mongoose')

const movieSchema=mongoose.Schema({
        title:{
            type:String,
            require:true,
            trim:true,
        },
        year:{
            type:String,
            default:"Year not known"
        },
        rated:{
            type:String,
            default:"Unknown"
        },
        runtime:{
            type:String,
            default:"Unknown"
        },
        genre:{
            type:String,
            default:"Unknown"
        },
        director:{
            type:String,
            default:"Unknown",
            trim: true
        },
        writer:{
            type:String,
            default:"Unknown",
            trim: true
        },
        production:{
            type:String,
            default:"Unknown",
            trim: true
        },
        actors:{
            type:String,
            default:"Unknown",
            trim: true
        },
        plot:{
            type:String,
            default:"Unknown",
        },
        language:{
            type:String,
            default:"Unknown",
            trim: true
        },
        country:{
            type:String,
            default:"Unknown",
            trim: true
        },
        awards:{
            type:String,
            default:"No awards",
        },
        ImdbID:{
            type:String,
            default:"Unknown"
        },
})

module.exports=mongoose.model('movies',movieSchema)