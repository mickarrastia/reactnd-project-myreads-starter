import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link
            className='close-search'
            to='/'>
            Close
          </Link>
        </div>
      </div>
    )
  }
}

export default SearchBooks
