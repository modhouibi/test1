const express=require('express');
const app=express();
const hbs=require('hbs');
const fs=require('fs')

const port=process.env.PORT || 3000;

//other middlewares
app.use((req,res,next)=>{

var now=new Date().toString();
fs.appendFile('serverLog.txt',`${req.method} ...${req.path}..${now}`,(err)=>{
    if(err)
    throw err;
    next();
});


})

// app.use((req,res,next)=>{
//     res.render('mainenance');
// })
app.use(express.static(__dirname+'/public'));


app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('currentYear',()=>{
return new Date().getFullYear();
})

app.get('/help.html',(req,res)=>{

   res.send("ww"); 
})

app.get('/about',(req,res)=>{
    
      res.render('about',{hh:123}) 
    })

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})