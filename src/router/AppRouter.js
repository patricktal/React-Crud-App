import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route
                            Component={(props) => (
                                <BookList {...props} books={books} setBooks={setBooks} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            path="/add"
                            Component={(props) =>
                                <AddBook {...props} books={books} setBooks={setBooks} />
                            }
                        />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;