import express from "express";
//developing express application
const app =express();
//listening to the port 6000
const PORT = 6000;
//defining the route for the /JOHN URL
app.get("/JOHN",(req,res)=>{
    res.send("my name is coral ");
});

//defining the route for the /GEORGE URL
app.get("/GEORGE",(req,res)=>{
    res.send("my name is henry ");
});
//st
//starting the server and listening on the specified port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});