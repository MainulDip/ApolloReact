import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Launches from './components/launches'
import Launch from './components/launch'
import './App.css'
import logo from './spacexlogo.png'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})
function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className='container'>
      <img
        src={logo}
        alt='SpaceX logo'
        style={{
          width: 100,
          display: 'block',
          marginRight: 'auto'
        }}
      />
      <Route exact path="/" component={Launches}/>
      <Route exact path="/launch/:flight_number" component={Launch}/>
    </div>
    </Router>
    </ApolloProvider>
  )
}

export default App
