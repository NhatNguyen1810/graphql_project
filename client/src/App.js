import logo from './logo.svg';
import './App.css';

import ApolloClient from 'apollo-boost'; 
import {gql} from 'apollo-boost'; 
import React, {useState} from 'react'; 
import Home from './pages/Home'
import {ApolloProvider} from '@apollo/react-hooks'; 
import {AuthProvider} from './context/authContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Nav from './components/Nav';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
}); 


const  App = () => {


  return (

    <ApolloProvider client={client}>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
      </Switch> 
    </ApolloProvider>
  );
}

export default App;
