import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ListBooks extends Component {

  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>My Reads</h1>
        </div>
        <div className='list-books-content'>
          Books go here
        </div>
        <div className='open-search'>
          <Link
            to='/search'
          >Add book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
