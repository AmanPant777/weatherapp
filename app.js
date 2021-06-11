const express=require("express")
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

    // const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=285701e1009285fc5e80dfbf29cc4b32&units=metric"
    // https.get(url,function(response){
    //     console.log(response.statusCode)
    //     response.on("data",function(data){
    //         const weatherdata=JSON.parse(data);
    //         console.log(weatherdata);
    //         const temp=weatherdata.main.temp;
    //         console.log(temp)
    //         const Discription=weatherdata.weather[0].description;
    //         console.log(Discription)
    //         res.write("<h1>The Temprature is :"+temp+"</h1>");
    //         res.send();
    //     })
       
    // })
    
});
app.post("/",function(req,res){
    console.log(req.body.cityName);
    const query=req.body.cityName;
    const apikey="285701e1009285fc5e80dfbf29cc4b32"
    const unit="metric"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;

    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherdata=JSON.parse(data);
            const temp=weatherdata.main.temp;
            res.write("<h1>The Temprature is :"+temp);
            res.send();
        })
    })



})












app.listen(3000,function(){
    console.log("Server is running at port 3000")
})