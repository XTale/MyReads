import React from 'react'
import BookShelfChange from './BookShelfChange'
import PropTypes from 'prop-types'

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks && props.book.imageLinks.smallThumbnail})` }}></div>
        <BookShelfChange book={props.book} reloadBooks={props.reloadBooks}></BookShelfChange>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  )
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
  reloadBooks: PropTypes.func
}

export default Book