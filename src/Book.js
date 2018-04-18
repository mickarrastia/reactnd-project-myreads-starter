import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

/**
 * Renders basic book details such as cover, title and authors.
 */
class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    getBookShelf: PropTypes.func
  }

  render() {
    const {book, onShelfChange, getBookShelf} = this.props
    if(book.shelf === undefined) {
      book['shelf'] = getBookShelf(book)
    }
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'
               style={{width: 128, height: 192, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`}}>
          </div>
          <ShelfChanger book={book} onShelfChange={onShelfChange}/>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors !== undefined ? book.authors.join(', ') : ''}</div>
      </div>
    )
  }
}

export default Book
