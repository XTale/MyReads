import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = (props) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => (
              <li key={book.id}>
                <Book book={book} reloadBooks={props.reloadBooks}></Book>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
}
BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  reloadBooks: PropTypes.func.isRequired,
  bookShelfTitle: PropTypes.string.isRequired
}

export default BookShelf