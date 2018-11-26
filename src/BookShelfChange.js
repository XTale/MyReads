import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
class BookShelfChange extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }
  state = {
    shelf: "",
  }

  componentDidMount() {
    this._isMounted = true;
    BooksAPI.get(this.props.book.id).then((book) => {
      this.setState({
        shelf: book.shelf
      })
    })
  }


  handleShelf = (event) => {
    // 在异步回调函数中event对象将被重置为0,所以这里提前把值赋给val
    const val = event.target.value;
    BooksAPI.update(this.props.book, val).then((data) => {
      if (this._isMounted) {
        // 不要在setState函数中使用event对象，因为setState并不保证是同步处理
        this.setState({
          shelf: val
        })
        this.props.reloadBooks()
      }
    })
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={this.handleShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChange