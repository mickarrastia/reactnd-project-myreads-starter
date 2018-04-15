import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import debounce from 'lodash.debounce'

class SearchBooks extends Component {
  static propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    getBookShelf: PropTypes.func
  }

  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
        query: query,
        searchedBooks: []
      }
    ))
    this.runSearch(query)
  }

  runSearch = debounce((query) => {
    if (query && query !== '') {
      BooksAPI.search(query).then(
        (books) => {
          this.setState(() => ({
            searchedBooks: books
          }))
        }
      ).catch((error) => {
        this.setState(() => ({
          searchedBooks: []
        }))
      })
    }
  }, 500)

  render() {
    const {onShelfChange, getBookShelf} = this.props
    const {query, searchedBooks} = this.state
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link
            className='close-search'
            to='/'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {searchedBooks && searchedBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange} getBookShelf={getBookShelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
