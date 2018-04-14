import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/**
 * A bookshelf displaying only books for the type of shelf.
 */
class BookShelf extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const {name, type, books, onShelfChange} = this.props
    const showingBooks = books.filter(b => b.shelf.includes(type))

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{name}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {showingBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>

    )
  }
}

export default BookShelf
