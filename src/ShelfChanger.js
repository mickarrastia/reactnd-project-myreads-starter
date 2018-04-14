import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Updates the shelf of a specific book.
 */
class ShelfChanger extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    shelf: this.props.book.shelf
  }

  handleChange =(event) => {
    this.setState(() => {shelf: event.target.value})
    this.props.onShelfChange(this.props.book, event.target.value)
  }

  render() {
    return (
      <div className='book-shelf-changer'>
        <select value={this.state.shelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
