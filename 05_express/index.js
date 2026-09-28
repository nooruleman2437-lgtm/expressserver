const express = require("express");
//developing express application
const app =express();
//listening to the port 6000
const PORT = 6000;
app.get("/",(req,res)=>{
    res.send("I am BS Computer Science Student ");
});
//starting the server and listening on the specified port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
