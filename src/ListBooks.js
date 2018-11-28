import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
class ListBooks extends Component {
  // 对传入ListBooks组件的props属性进行检测
  static propTypes = {
    books: PropTypes.array.isRequired,
    reloadBooks: PropTypes.func.isRequired
  }

  render() {
    const bookShelfTitles = [
      'Currently Reading',
      'Read',
      'Want to Read'
    ];
    const filterData = [
      'currentlyReading',
      'wantToRead',
      'read'
    ]
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookShelfTitles.map((shelfTitle, index) => {
              return (
                <BookShelf key={shelfTitle} books={this.props.books.filter((book) => {
              return book.shelf === filterData[index]
            })} reloadBooks={this.props.reloadBooks} bookShelfTitle={bookShelfTitles[index]}></BookShelf>
              )
            }
            )}
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