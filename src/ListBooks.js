import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

/**
 * The list of books grouped into shelves.
 */
class ListBooks extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const {books, shelves} = this.props
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>My Reads</h1>
        </div>
        <div className='list-books-content'>
          {shelves.map((shelf) => (
            <BookShelf key={shelf.name} name={shelf.name} type={shelf.type} books={books}/>
          ))}
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
