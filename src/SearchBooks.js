import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
class SearchBooks extends Component {
  static propTypes = {
    reloadBooks: PropTypes.func.isRequired
  }
  // 查询字符串是变化的值，将之设置为状态
  state = {
    query: '',
    books: []
  }

  handleBooks = (event) => {
    const query = event.target.value
    BooksAPI.search(query).then(books => {
      if (this._isMounted) {
         this.setState({
          query,
          books
        })
      }
    })
  }

  componentDidMount = () => {
    this._isMounted = true;
    BooksAPI.search(this.state.query).then(books => {
      this.setState({
        books
      })
    })
  }

  componentWillUnmount = () => {
      this._isMounted = false;
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={this.state.query} onChange={this.handleBooks} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          {
            (this.state.query && this.state.books.length > 0) ? (
              <ol className="books-grid">
              {this.state.query && this.state.books && this.state.books.map((book) => (
                <li key={book.id}>
                  <Book book={book} reloadBooks={this.props.reloadBooks}></Book>
                </li>
              ))}
              </ol>
            ) : (
              <ol className="books-grid"></ol>
            )
          }
        </div>
      </div>
    )
  }
}

export default SearchBooks