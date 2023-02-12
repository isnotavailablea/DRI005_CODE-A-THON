const mong=require('mongoose')
const localStayschema=new mong.Schema(
    {
        userName:{
            type:String,
            required:true,
        },
        Rent:{
            type:String,
        },
        StateName:{
            type:String,
            required:true,
        },
        distName:{
            type:String,
            required:true
        },
        Rating:{
            type:String,
        },
        ContactNumber:{
            type:String
        },PictureBedroom:{
            type:String
        },PictureBathroom:{
            type:String
        },PictureKitchen:{
            type:String
        }
    }
)


const localStaymodel=mong.model('localStays',localStayschema)


module.exports=localStaymodel