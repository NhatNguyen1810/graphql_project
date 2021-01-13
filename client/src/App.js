import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost'; 
import {gql} from 'apollo-boost'; 
import React, {useState} from 'react'; 
import Home from './pages/Home'
import {ApolloProvider} from '@apollo/react-hooks'; 
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
}); 


const  App = () => {


  return (

    <ApolloProvider client={client}>

      <Home />

    </ApolloProvider>
  );
}

export default App;
