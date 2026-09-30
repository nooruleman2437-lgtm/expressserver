//Delete Route
app.delete("/user",(req,res)=>{
    console.log("Delete request received")
    //Handle the delete logic here
    //nothing delete here because we do not use any code here that which id or which info is deleted
    //it is just concept how to delete
    res.json({
        message:"user deleted successfully"
    });
});