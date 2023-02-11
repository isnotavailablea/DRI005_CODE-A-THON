const mong=require('mongoose')
const blogschema=new mong.Schema(
    {
        distName:{
            type:String,
            required:true,
        },
        StateName:{
            type:String,
            required:true,
        },
        userName:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        festivalName:{
            type:String,
            required:true
        },
        rating:{
            type:Number
        },Title:{
            type:String,
            required:true
        }
    }
)


const blogmodel=mong.model('blogs',blogschema)


module.exports=blogmodel