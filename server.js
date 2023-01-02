var express=require('express');
var app=express();
var path=require("path");


app.get('/',(req,res)=>{

    res.sendFile('public/CourseDetails.html',{root:__dirname});
});

app.get('/Shedule',(req,res)=>{

    res.sendFile('public/Shedule.html',{root:__dirname});
});



app.listen(5000);
console.log("Running...!!!!!!!!!!!");