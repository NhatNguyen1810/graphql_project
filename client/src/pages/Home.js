import ApolloClient from 'apollo-boost'; 
import {gql} from 'apollo-boost'; 
import React, {useState} from 'react'; 
import {useQuery, useLazyQuery} from '@apollo/react-hooks'; 

const GET_ALL_POSTS = gql`
    {
        allPosts{
            id
            title
            description
        }
    }
`
 

const  Home = () => {
const {data, loading, error} = useQuery(GET_ALL_POSTS)

  const [fetchPosts, {data:posts}] = useLazyQuery(GET_ALL_POSTS);
 


  if(loading){
      return <div>Loading</div>
  }


  return (
    <div className="container">
      <div className="row p-5"> 
        {data.allPosts.map((p) => (
          <div className="col md-4" key={p.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  {p.title}
                </div>
                <p className="card-text">{p.description}</p>

                <hr/>
                
              </div>
             
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => fetchPosts()} className="btn btn-raised">Fetch Posts</button>
      {JSON.stringify(posts)}
    </div>
  );
}

export default Home;
