import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
class WantToReadShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    reloadBooks: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book book={book} reloadBooks={this.props.reloadBooks}></Book>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToReadShelf