import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Algorithm 3rd Edition', id: 1},
        {title: 'Cracking the Code Interview', id: 2},
        {title: 'Leetcode Solution', id: 3},
        {title: 'Playboy', id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;