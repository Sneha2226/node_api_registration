const express =require('express');
const hbs = require('hbs');
const app =express();
const Register=require("./models/register.js")
const path= require('path')
app.use(express.json())
require("./Db/conn");
const port= process.env.PORT|| 8000;
const static_path=path.join(__dirname,"./public")
const views_path=path.join(__dirname,"./views")
 app.use(express.static(static_path));
app.set('view engine','hbs');
app.set("views",views_path)
app.get("/",(req,res)=>{
    res.render("index")
});
app.post("/register",async(req,res)=>{
    try{
console.log(req.body.email)
res.send(req.body.email)
    }catch(e){
res.status(201).send(e)
    }
});
app.listen(port,()=>{
    console.log(`the server is running on port ${port}`);
})