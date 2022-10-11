const http =require("http");//ye module connection buildup karne mai kaam aaegya
const fs=require("fs");//ye file read kr lega

const PORT=2000;//maan liya ki ye ek constant hai (for Standard purpose)
const hostname= "localhost";
const home=fs.readFileSync("./index.html", "utf-8")

const server=http.createServer((req,res) => {  // isme server create ho gya hai agar iske parameter bhool jaao to refer node website
       
    const url= req.url; // ye bta dega ki kon si url hit hue hai user ke through
    
    if(url==="/about")
    {
       return res.end("<h1>About Page</h1>");
    }
    if(url==="/")
    {
        return res.end(home)
    }
    else
    {
        return res.end("<h1>404 not found</h1>")
    }
    
    // res.end("<h1>Hellow World </h1>");
});

server.listen(PORT, hostname,()=>{  // it will listen the port on localhost
    console.log(`Server hosted on ${hostname} and on port no. ${PORT}` );
})