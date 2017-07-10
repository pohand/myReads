import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ListShelfs extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, onUpdateShelf } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ListBooks books={books.filter((c) => c.shelf === 'currentlyReading')} onUpdateShelf={onUpdateShelf} />
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ListBooks books={books.filter((c) => c.shelf === 'wantToRead')} onUpdateShelf={onUpdateShelf} />
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ListBooks books={books.filter((c) => c.shelf === 'read')} onUpdateShelf={onUpdateShelf} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to='/search'
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListShelfs