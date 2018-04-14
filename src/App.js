import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

/**
 * An application to manage book reading activity.
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

  setBookShelf = (book, shelf) => {
    this.setState(currentState => ({
      books: currentState.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelf
        }
        return b
      })
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks
            shelves={this.state.shelves}
            books={this.state.books}
            onShelfChange={this.setBookShelf}
          />
        )}
        />
        <Route path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
