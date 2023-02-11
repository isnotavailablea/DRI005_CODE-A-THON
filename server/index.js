require('dotenv').config()
const { response } = require('express')
const exp=require('express')
const app=exp()
const cors=require('cors')
const bodyParser = require("body-parser");

const mongo=require('mongoose')
// const =require('./Routes/usersignup')
const identification = require('./Routes/usersignup')
const finduser = require('./Routes/userlogin')
const adddists=require('./Routes/adddists')
const givedists=require('./Routes/getdists')
const addfestival=require('./Routes/addfestival')
const givefests=require('./Routes/getfestivals')
const addblogs = require('./Routes/addblog')
const getblogs = require('./Routes/getblogs')
const addimgfests = require('./Routes/addimgforfests')
const givefestimgs = require('./Routes/getfestimgs')
const port ='8000'
mongo.connect(process.env.CONNECTION_URL)
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(exp.json())
// app.use(exp.urlencoded({extended:true}))
app.use(cors())
app.use('/signup',identification)
app.use('/login',finduser)
app.use('/adddist',adddists)
app.use('/getdist',givedists)
app.use('/addfest',addfestival)
app.use('/getfests',givefests)
app.use('/addblog',addblogs)
app.use('/getblogs',getblogs)
app.use('/addfestimg',addimgfests)
app.use('/getfestimgs',givefestimgs)
app.listen(port,()=>{
    console.log(`${port} is listening`);
})