const express = require('express');
const server = express();
const PORT = 3001;
const router =  require("./routes/index")

// server.use(express.json())
// server.use("/rickandmorty", router)

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())
server.use("/rickandmorty", router)


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});




















//________________________-WEBSERVER____________________________________________

//const { getCharById } = require("./controllers/getCharById")

//http.createServer((req,res) => {
 //   res.setHeader('Access-Control-Allow-Origin', '*');
  //  const {url} = req

  //  if(url.includes("/rickandmorty/character") ){
   //     const id =  Number(url.split("/").pop())
     //   const character = characters.find((char) => char.id === id)
   //     res.writeHead( 200 , {"Content-type": "application/json"})
    //    res.end(JSON.stringify(character))
  //  }

 // if(url.includes("/rickandmorty/character") ){
  //      let dividir = url.split("/")
  //      let id = Number(dividir.pop())
    //     getCharById(res, id)
//  }
  
//}).listen(puerto, "localhost") 


