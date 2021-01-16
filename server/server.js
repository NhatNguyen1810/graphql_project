const express = require('express');
require('dotenv').config();
const app = express();
const {ApolloServer} = require('apollo-server-express'); 
const http = require('http'); 
const path = require('path')
const mongoose = require('mongoose');
const {authCheck} = require('./helpers/auth'); 
// imports


const db = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useCreateIndex: true, 
            useFindAndModify:false, 
        })
        .then(() => {
            console.log("db connected")
        })
    } catch (error) {
        console.log("db connect error", error);   
    }
}

db(); 

const {
    fileLoader,
    mergeTypes,
    mergeResolvers
  } = require("merge-graphql-schemas");
   
  // usage
  // typedefs autoloader
  const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./typeDefs")));
  // resolvers autoloader
  const resolvers = mergeResolvers(
    fileLoader(path.join(__dirname, "./resolvers"))
  );



const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req,res }) => {
       
        return {
          req: req,
          res:res
        }
    },
})

// applyMiddleWare

apolloServer.applyMiddleware({
    app
});

const httpServer = http.createServer(app);

app.get('/rest', (req,res) => {
    console.log(req.headers);
    res.send("hihi"); 
})

const port = process.env.PORT || 7000
httpServer.listen(port, () => {
    console.log(`server is running on ${port}`)
    console.log(`server is running on ${apolloServer.graphqlPath}`)
})