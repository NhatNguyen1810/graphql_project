const {gql} = require('apollo-server-express'); 


module.exports = gql`
    type Query {
        me: String
    }
    type Post{
        id: ID!
        title: String!
        description: String!
    }
`;