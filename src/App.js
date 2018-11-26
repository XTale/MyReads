import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
  }
  reloadBooks = () => {
    this.getAll()
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks books={this.state.books} reloadBooks={this.reloadBooks}></ListBooks>
          )}></Route>
        <Route path="/search" render={
          () => (
            <SearchBooks reloadBooks={this.reloadBooks}></SearchBooks>
          )
        }></Route>
      </div>
    )
  }
}

export default BooksApp
