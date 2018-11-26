import React, {Component} from 'react'
import BookShelfChange from './BookShelfChange'
import PropTypes from 'prop-types'
class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    reloadBooks: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
          <BookShelfChange book={this.props.book} reloadBooks={this.props.reloadBooks}></BookShelfChange>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book