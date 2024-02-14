const express =require('express')
const app=express()
const port =process.env.PORT ||7000

app.set('view engine', 'ejs')
app.use(express.json())
app.get('/',(res,resp)=>{
resp.send("hello")
})
app.get("/bdy",(res,resp)=>{
   const name= res.query.name
   let alt=`http://localhost:7000/?name=${name}`
   
    resp.render("index",{name,alt})
   

})

app.listen(port,()=>{
    console.log(`app is running on ${port}this port`)
})