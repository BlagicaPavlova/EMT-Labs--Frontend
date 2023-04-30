import './App.css';
import {Component} from "react";
import React from "react";
import Books from "../Books/books";
import bookService from "../../repository/bookRepository";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Categories from "../Categories/categories";
import Header from "../Header/header";
import BookAdd from "../BookAdd/bookAdd"
import BookEdit from "../BookEdit/bookEdit";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/books"} element={<Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.editBook} onMarkAsTaken={this.markAsTaken}/>}/>
                    <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
                    <Route path={"/add"} element={<BookAdd authors={this.state.authors} categories={this.state.categories} onAddBook={this.addBook}/>}></Route>
                    <Route path={"/edit/:id"} element={
                        <BookEdit authors={this.state.authors} categories={this.state.categories} onEditBook={this.editBook} book={this.state.selectedBook}/>
                    }></Route>
                </Routes>
            </BrowserRouter>
        );
    }

    loadBooks = () => {
        bookService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCategories = () => {
        bookService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    loadAuthors = () => {
        bookService.fetchAuthors()
            .then((data)=> {
                this.setState({
                    authors: data.data
                })
            });
    }

    deleteBook = (id) => {
        bookService.deleteBook(id)
            .then(()=>{
                this.loadBooks();
            })
    }

    addBook = (name,category,authorId,availableCopies) => {
        bookService.addBook(name,category,authorId,availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id,name,category,authorId,availableCopies) => {
        bookService.editBook(id,name,category,authorId,availableCopies)
            .then(()=>{
                this.loadBooks();
            })
    }

    markAsTaken = (id) => {
        bookService.markAsTaken(id)
            .then(()=>{
                this.loadBooks();
            })
    }

    getBook = (id) => {
        bookService.getBook(id)
            .then((data)=>{
                this.setState({
                    selectedBook:data.data
                });
            })
    }


    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }
}

export default App;
