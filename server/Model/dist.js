const mong=require('mongoose')
const distschema=new mong.Schema(
    {
        distName:{
            type:String,
            required:true,
        },
        StateName:{
            type:String,
            required:true,
        }
    }
)


const distmodel=mong.model('dists',distschema)


module.exports=distmodel