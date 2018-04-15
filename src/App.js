import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


/**
 * An application to manage book reading activity.
 * Holds the state of the application and is singularly responsible for updating such state.
 */
class BooksApp extends React.Component {

  state = {
    shelves: [
      {'name': 'Currently Reading', 'type': 'currentlyReading'},
      {'name': 'Want to Read', 'type': 'wantToRead'},
      {'name': 'Read', 'type': 'read'}],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(
      (books) => {
        this.setState(() => ({
          books: books
        }))
      }
    )
  }

  updateBookList = (book, shelf) => {
    const managedBook = this.state.books.find(b => {
      return b.id === book.id
    })
    if (managedBook) {
      this.updateBook(book, shelf)
    } else {
      this.addBook(book, shelf)
    }
    BooksAPI.update(book, shelf)
  }

  addBook = (book, shelf) => {
    book['shelf'] = shelf
    this.setState((currentState) => ({
      books: currentState.books.concat([book])
    }))
  }

  updateBook = (book, shelf) => {
    this.setState(currentState => ({
      books: currentState.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelf
        }
        return b
      })
    }))
  }

  getBookShelf = (book) => {
    const managedBook = this.state.books.find(b => {
      return b.id === book.id
    })
    if(managedBook) {
      return managedBook.shelf
    } else {
      return 'none'
    }
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks
            shelves={this.state.shelves}
            books={this.state.books}
            onShelfChange={this.updateBookList}
          />
        )}
        />
        <Route path='/search' render={() => (
          <SearchBooks
            onShelfChange={this.updateBookList}
            getBookShelf={this.getBookShelf}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
