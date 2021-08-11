///////Original

import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import Book from '../components/Book';

import { QUERY_BOOKS } from '../utils/queries';
// Import the `useStoreContext()` Hook
// Import the two actions

// Remove all traces of prop drilling
const Detail = ({ setCurrentBook, currentBook }) => {
	const { bookId } = useParams();

	// Call the useStoreContext() Hook to retrieve the current state from the global state object
	// and the dispatch() method to update state

	// Refactor the useQuery Hook to get a 'loading' and 'data' property
	const { data: bookData } = useQuery(QUERY_BOOKS);

	// Instead of 'books', create a 'currentBook' variable that will use the `bookId` from the params
	// to find the book from the global state
	const books = bookData?.books || [];

	// Refactor the useEffect() Hook to use an `if/else` statement to trigger the two actions
	useEffect(() => {
		setCurrentBook(books.find(({ _id }) => _id === bookId));
		console.log(currentBook);

		// On page leave (component unmount), this will unset `currentBook`
		return () => {
			dispatch({
				type: UPDATE_CURRENT_BOOK,
				currentBook: {},
			});
		};
	}, [loading, currentBook, dispatch, data]);

	return (
		<main>
			<div className='m-5'>{currentBook ? <Book {...currentBook} /> : <h2>Loading...</h2>}</div>
		</main>
	);
};

export default Detail;

// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { useParams } from 'react-router-dom';
// import Book from '../components/Book';
// import { QUERY_BOOKS } from '../utils/queries';

// // Import the `useStoreContext()` Hook
// import { useStoreContext } from '../utils/GlobalState';

// // Import the two actions
// import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from '../utils/actions';

// // Remove all traces of prop drilling
// function Detail(/*{ setCurrentBook, currentBook }*/) {
// 	// Call the useStoreContext() Hook to retrieve the current state from the global state object
// 	// and the dispatch() method to update state
// 	const [state, dispatch] = useStoreContext();

// 	// Instead of 'books', create a 'currentBook' variable that will use the `bookId` from the params
// 	// to find the book from the global state
// 	const { currentBook } = state; ///////////const books = bookData?.books || [];
// 	const { bookId } = useParams();
// 	// Refactor the useQuery Hook to get a 'loading' and 'data' property
// 	const { loading, data } = useQuery(QUERY_PRODUCTS); //////////const { data: bookData } = useQuery(QUERY_BOOKS);*/

// 	// Refactor the useEffect() Hook to use an `if/else` statement to trigger the two actions
// 	useEffect(() => {
//     if (data) {
//       dispatch({
//         type: UPDATE_BOOKS,
//         books: data.books,
//       });
//     } else if (!loading) {
//       dispatch({
//         type: UPDATE_BOOKS,
//         books: books,
//       });
//     }

//     }
// 		//////////setCurrentBook(books.find(({ _id }) => _id === bookId));
// 		//////////console.log(currentBook);

// 		// On page leave (component unmount), this will unset `currentBook`
// 		return () => {
// 			dispatch({
// 				type: UPDATE_CURRENT_BOOK,
// 				currentBook: {},
// 			});
// 		};
// 	}, [loading, currentBook, dispatch, data]);

// 	return (
// 		<main>
// 			<div className='m-5'>{currentBook ? <Book {...currentBook} /> : <h2>Loading...</h2>}</div>
// 		</main>
// 	);
// }

// export default Detail;
