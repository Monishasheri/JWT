const express= require("express")
const app= express()
const port=3000
const router=require("./routes/routes")
app.listen(port,()=>{
    console.log("Server is ready on port",port)
})
app.use("/",router)
