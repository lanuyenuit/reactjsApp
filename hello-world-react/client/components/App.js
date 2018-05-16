//library
import React from 'react';
import _ from 'lodash';
import swal from 'sweetalert';

//global component
import Modal from './Modal';
import SearchModal from './SearchModal'
import Pagination from './Pagination'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickAddBook: false,
            clickEditBook: false,
            clickSearchBook: false,
            addID:'',
            inputSearch:'',
            resultIDs:[],
            books: [
                {
                    id: 1,
                    title: 'How to win friends and influences people',
                    author: 'Dale Carnegie',
                },
                {
                    id: 2,
                    title: 'Who got your back',
                    author: 'Keith Ferrazzi',
                },
                {
                    id: 3,
                    title: '7 habits of highly effective people',
                    author: 'Stephen Covey',
                },
                {
                    id: 4,
                    title: 'Never eat alone',
                    author: 'Keith Ferrazzi',
                },
                {
                    id: 5,
                    title: 'Predictably irrational',
                    author: 'Dan',
                },
                {
                    id: 6,
                    title: '6 irrational',
                    author: 'Dan',
                },
                {
                    id: 7,
                    title: '7 irrational',
                    author: 'Dan',
                },
                {
                    id: 8,
                    title: '8 irrational',
                    author: 'Dan',
                },
                {
                    id: 9,
                    title: '9 irrational',
                    author: 'Dan',
                },
                {
                    id: 10,
                    title: '10',
                    author: 'Dan',
                },
                {
                    id: 11,
                    title: '11 irrational',
                    author: 'Dan',
                },
                {
                    id: 12,
                    title: '12 irrational',
                    author: 'Dan',
                },
                {
                    id: 13,
                    title: '13 irrational',
                    author: 'Dan',
                },
                {
                    id: 14,
                    title: '14 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                },
                {
                    id: 15,
                    title: '15 irrational',
                    author: 'Dan',
                }
            ],
            book: {id: null, title: null, author: null},
            toggleEditForm: false,
            activePage: 1,
            pageOfItems: [],
            currentPage: 1
        }
    }

    onChangePage = (_pageOfItems, _currentPage) => {
        this.setState({
            pageOfItems: _pageOfItems,
            currentPage: _currentPage
        });
    };

    //click Add button to add book to list books
    addBook = () => {
        let bookInit = {
            id: null,
            title: null,
            author: null
        };

        this.setState({
            clickAddBook: true,
            book: bookInit
        });
    };

    //click x button or close button to close modal
    closeModal = (modalName) => {
        this.setState({[modalName]: false});
    };

    // display books UI
    displayBookTable = () => {
        let {
            pageOfItems,
            currentPage
        } = _.cloneDeep(this.state);

        return _.map(pageOfItems, (item, i) =>  {
            return (
                <tr key={i} >
                    <td>{(10*(currentPage-1) +i+1)}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>
                        <button onClick={()=>this.editBook(item.id)}><i className="fa fa-edit"/></button>
                        <button onClick={()=>this.deleteBook(item.id)}><i className="fa fa-ban"/></button>
                    </td>
                </tr>
            )
        })
    };

    //get value at input element
    handleInput = (e, field) => {
        let {book, inputSearch} = _.cloneDeep(this.state);
        let input = e.target.value;

        if (field === 'title') {
            book.title = input;
        }

        if (field === 'search') {
            inputSearch = input;
        } else {
            book.author = input;
        }

        this.setState({
            book,
            inputSearch,
            newbook: book
        });
    };

    //use sweet alert to confirm DO you want delete it?
    deleteBook = (id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let arrRemain = _.cloneDeep(this.state.books);
                    let newBooks = _.filter(arrRemain, (books) => {
                        return books.id !== id
                    });
                    this.setState({books: newBooks});
                    this.displayBookTable()
                }
            });

    };


    editBook = (id) => {
        let {books} = _.cloneDeep(this.state);
        let book = _.find(books, ['id', id]);

        this.setState({
            clickEditBook: true,
            book: book
        });
    };

    //click save btton in modal to save
    saveBook = () => {
        let { books, book} = _.cloneDeep(this.state);

        if (!book.id) {
            let arrTemp = _.cloneDeep(this.state.books);
             book.id = ++_.last(arrTemp).id;
            books.push(book);
        } else {
            _.forEach(books, (item) => {
                if (item.id === book.id ) {
                    _.merge(item, book)


                }
            });
        }

        this.setState({
            books,
            book,
            clickAddBook: false,
            clickEditBook: false,
        });

    };

    searchBooks = () => {
        let result;
        let {inputSearch} = _.clone(this.state);
        let {books} = _.cloneDeep(this.state);

        if (typeof inputSearch === "undefined" ||  (inputSearch).length ===0) {
            result = [];
        } else {
            result = _.filter(books, (c) => {
                let searchIn = Object.keys(c).reduce((key, val) => {
                    return (val !== 'id') ? key+c[val] : key
                }, '');
                return _.includes(_.lowerCase(searchIn),_.lowerCase(inputSearch));
            });
        }

        this.setState({
            resultIDs: _.map(result, 'id'),
            clickSearchBook: true
        });
    };

    render() {
        let {clickAddBook, clickEditBook, clickSearchBook, book,
            books, resultIDs
            } = _.clone(this.state);

        return (
            <div className="wrapper">
                <header className="main-header">
                    <a href="index2.html" className="logo">
                        <span className="logo-mini"><b>A</b>LT</span>
                        <span className="logo-lg"><b>Admin</b>LTE</span>
                    </a>
                    <nav className="navbar navbar-static-top">
                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="node_modules/admin-lte/dist/img/user2-160x160.jpg"
                                             className="user-image" alt="User Image"/>
                                        <span className="hidden-xs">Alexander Pierce</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="node_modules/admin-lte/dist/img/user2-160x160.jpg"
                                                 className="img-circle" alt="User Image"/>
                                            <p>
                                                Alexander Pierce - Web Developer
                                                <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>
                                        <li className="user-body">
                                            <div className="row">
                                                <div className="col-xs-4 text-center">
                                                    <a href="#">Followers</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="#">Sales</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="#">Friends</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="main-sidebar">
                    <section className="sidebar" style={{height: "auto"}}>
                        <ul className="sidebar-menu tree" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview menu-open">
                                <a href="#">
                                    <i className="fa fa-dashboard"/> <span>books</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"/>
                                    </span>
                                </a>
                            </li>
                            <li className="treeview menu-open">
                                <a href="#">
                                    <i className="fa fa-dashboard"/> <span>Authors</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"/>
                                     </span>
                                </a>
                            </li>
                            <li className="treeview menu-open">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> <span>Year</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </aside>
                <div className="content-wrapper" style={{minHeight: "960px"}}>
                    <div className="box">
                        <div className="box-header">
                            <button style={{float: 'left', marginRight: '10px'}}
                                    onClick={() => this.addBook()}>
                                Add new book</button>
                            <div style={{
                                width: '40%',
                                float: 'right',
                                display: 'inline-flex',
                                marginBottom: '10px'}}>
                                <input style={{display: 'block'}}
                                    type="text"
                                    className="form-control"
                                    id="search"
                                    placeholder="Search"
                                    onChange={(e)=>this.handleInput(e,'search')}
                                />
                                <button onClick={()=>this.searchBooks()}
                                        style={{display: 'block'}}>
                                    Search</button>
                            </div>

                            {
                                clickAddBook &&
                                <Modal closeModal={this.closeModal}
                                       handleInput={this.handleInput}
                                       saveBook={this.saveBook}
                                       method="POST"
                                />
                            }
                            {
                                clickEditBook &&
                                    <Modal closeModal={this.closeModal}
                                           handleInput={this.handleInput}
                                           saveBook={this.saveBook}
                                           method="PUT"
                                           book={book}
                                    />
                            }
                            {
                                clickSearchBook &&
                                    <SearchModal closeModal={this.closeModal}
                                                 books={books}
                                                 resultIDs={resultIDs}
                                    />
                            }
                        </div>
                        <div className="box-body">
                            <div id="example2_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                                <div className="row">
                                    <div className="col-sm-6"/>
                                    <div className="col-sm-6"/>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="example2" className="table table-bordered table-hover dataTable"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabindex="0" aria-controls="example2"
                                                    rowspan="1" colspan="1" aria-sort="ascending"
                                                    aria-label="Rendering engine: activate to sort column descending">#
                                                </th>
                                                <th className="sorting" tabindex="0" aria-controls="example2"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Browser: activate to sort column ascending">Title
                                                </th>
                                                <th className="sorting" tabindex="0" aria-controls="example2"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Platform(s): activate to sort column ascending">Author
                                                </th>
                                                <th className="sorting" tabindex="0" aria-controls="example2"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Engine version: activate to sort column ascending">
                                                    Action
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.displayBookTable()}
                                            {/**/}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="dataTables_info" id="example2_info" role="status"
                                             aria-live="polite">Showing 1 to 10 of 57 entries
                                        </div>
                                    </div>
                                    <div>
                                        <div className="container">
                                            <div className="text-center">
                                                <Pagination items={books} onChangePage={this.onChangePage} />
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
