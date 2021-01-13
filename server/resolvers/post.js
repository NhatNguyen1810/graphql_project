const {gql} = require('apollo-server-express'); 
const {posts} = require('../temp'); 



// queries

const totalPosts = () => posts.length;
const allPosts = () => posts; 

//mutation


const newPost = (parent, args, context) => {

    console.log(args)

    const {title, description} = args.input
    //create a new post object

    const post = {
        id: posts.length++, 
        title: title, 
        description: description, 
    }

    // push new post object to post array 

    posts.push(post);


    return post; 
}


module.exports = {
    Query:{
        totalPosts,
        allPosts
    },
    Mutation: {

    }
};