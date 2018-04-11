import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>My Reads</h1>
        </div>
        <div className='list-books-content'>
          <ol className='books-grid'>
            {books.map((book) => (
              <li key={book.id}>
                <div className='book'>
                  <div className='book-top'>
                    <div className='book-cover'
                         style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
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
