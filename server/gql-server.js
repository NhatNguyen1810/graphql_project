const {ApolloServer} = require('apollo-server'); 
require('dotenv').config();


// gql server 
// types: query/ mutation/ subscription/ pagination
// resolvers 
// exclamation mark meeans cant be empty 
// 
const typeDefs = `
    type Query{
        totalPosts: Int!
    }
`


// resolvewers 

const resolvers = {
    Query:{
        totalPosts: () => 42,
    }
};


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.listen(process.env.PORT , () => {
    console.log("graphql server is running"); 
})