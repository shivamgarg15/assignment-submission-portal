const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("welcome shivam");
});

app.get("/contact", function(req, res){
    res.send("welcome shivam i am a web developer hahahahha");
});

app.get("/callme", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(5000, function(err, res) {
    console.log("server is running at port no. 6000");
}); 