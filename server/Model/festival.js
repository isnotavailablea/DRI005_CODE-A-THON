const mong=require('mongoose')
const festivalschema=new mong.Schema(
    {
        festivalName:{
            type:String,
            required:true,
        },
        StateName:{
            type:String,
            required:true,
        },
        distName:{
            type:String,
            required:true,
        }
    }
)


const festivalmodel=mong.model('festivals',festivalschema)


module.exports=festivalmodel