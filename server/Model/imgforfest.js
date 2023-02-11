const mong=require('mongoose')
const imgforfestschema=new mong.Schema(
    {
        distName:{
            type:String,
            required:true,
        },
        StateName:{
            type:String,
            required:true,
        },
        festivalName:{
            type:String,
            required:true,
        },
        theImg:{
            type:String,
            required:true
        }
    }
)


const imgforfestmodel=mong.model('imgforfests',imgforfestschema)


module.exports=imgforfestmodel