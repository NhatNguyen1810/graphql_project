const {gql} = require('apollo-server-express'); 
const {authCheck}= require('../helpers/auth'); 

const me = async (parent, args, context) => {

    console.log(context.res)
    console.log(args)
    await authCheck(context.req, context.res);
    return 'Nhat'
}

module.exports = {
    Query:{
        me
    }
};