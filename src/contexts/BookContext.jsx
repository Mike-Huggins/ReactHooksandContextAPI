import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Yo word", author: "Mike H", id: 1},
        {title: "Yo word2", author: "Mike Huggy", id: 2}
    ]);

    const addBook = (title, author) => {
        setBooks([...books], {title, author, id: uuid()})
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => {
            return book.id !== id
        }))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;