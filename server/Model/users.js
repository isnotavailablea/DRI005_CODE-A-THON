const mong=require('mongoose')
const userschema=new mong.Schema(
    {
        userName:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
)


const usermodel=mong.model('users',userschema)


module.exports=usermodel