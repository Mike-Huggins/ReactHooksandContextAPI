import React, {createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
        {title: "Yo word", author: "Mike H", id: 1},
        {title: "Yo word2", author: "Mike Huggy", id: 2}
    ], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : [{title: "Yo word", author: "Mike H", id: 1},
        {title: "Yo word2", author: "Mike Huggy", id: 2}]
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))

    }, [books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;