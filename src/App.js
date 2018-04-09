import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={ ListBooks }/>
        <Route path='/search' component={ SearchBooks }/>
      </div>
    )
  }
}

export default BooksApp
