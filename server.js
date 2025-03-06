const express = require('express');
const app = express();

app.get("/ping", (req, res)=>{
    res.send("ping pong");

})

app.listen(3000,() =>{
    console.log("server is runnning on port 3000");
});