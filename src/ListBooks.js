import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'
class ListBooks extends Component {
  // 对传入ListBooks组件的props属性进行检测
  static propTypes = {
    books: PropTypes.array.isRequired,
    reloadBooks: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReadingShelf books={this.props.books.filter((book) => {
              return book.shelf === 'currentlyReading'
            })} reloadBooks={this.props.reloadBooks}></CurrentlyReadingShelf>
            <WantToReadShelf books={this.props.books.filter((book) => {
              return book.shelf === 'wantToRead'
            })} reloadBooks={this.props.reloadBooks}></WantToReadShelf>
            <ReadShelf books={this.props.books.filter((book) => {
              return book.shelf === 'read'
            })} reloadBooks={this.props.reloadBooks}></ReadShelf>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button >Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks