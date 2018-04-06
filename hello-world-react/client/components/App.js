import React from 'react';
import Modal from './Modal.js';
import _ from 'lodash';
import SearchModal from './SearchModal'
import swal from 'sweetalert';
import Protype from 'prop-types'
// import {Pagination} from 'react-bootstrap';
import Pagination from './Pagination'

export default class App extends React.Component {

    constructor(props) {
        let exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });
        super(props);
        this.state = {
            idTerm:'',
            clickAddBook: false,
            clickEditBook: false,
            clickSearchBook: false,
            addID:'',
            addTitle: {},
            addAuthor: {},
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
                }
            ],
            booksPaging: [
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
                    title: 'Predictably ',
                    author: 'Dan ni',
                },
                {
                    id: 7,
                    title: 'Predict',
                    author: 'Dan',
                }
            ],
            book: {id: null, title: null, author: null},
            textInput:'',
            toggleEditForm: false,
            activePage: 1,
            exampleItems: exampleItems,
            pageOfItems: []
        }
    }
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    addBook = () => {
        let bookInit = {id: null, title: null, author: null};
        this.setState({clickAddBook: true, book: bookInit});
    };

    closeModal = (modalName) => {
        this.setState({[modalName]: false});
    };

    displayBookTable = () => {
        let {books} = _.cloneDeep(this.state);
        return _.map(books, (book, i) =>  {
            return (
                <tr key={i} >
                    <td>{++i}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>
                        <button onClick={()=>this.editBook(book.id)}><i className="fa fa-edit"/></button>
                        <button onClick={()=>this.deleteBook(book.id)}><i className="fa fa-ban"/></button>
                    </td>
                </tr>
            )
        })
    };

    handleInput = (e, field) => {
        let {book, inputSearch} = _.cloneDeep(this.state);
        let input = e.target.value;

        if (field === 'title') {
            book.title = input;
        }
        if (field === 'search') {
            inputSearch = input;
        }
        else {
            book.author = input;
        }

        this.setState({
            book,
            inputSearch,
            newbook: book
        });
    };

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
                }
            });

    };

    editBook = (id) => {
        let {books} = _.cloneDeep(this.state);
        let book = _.find(books, ['id', id]);
        this.setState({clickEditBook: true, book: book});
    };

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
        this.setState({resultIDs: _.map(result, 'id'), clickSearchBook: true});
    };



    render() {
        let {clickAddBook, clickEditBook, clickSearchBook, book, books, resultIDs, pageOfItems, exampleItems} = _.clone(this.state);
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
                                    <i className="fa fa-dashboard"></i> <span>books</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>


                            </li>
                            <li className="treeview menu-open">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> <span>Authors</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
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
                            <button style={{float: "left", marginRight: '10px'}} onClick={() => this.addBook()}>Add new book</button>
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
                                <button onClick={()=>this.searchBooks()} style={{display: 'block'}}>Search</button>
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
                                    <SearchModal displaySearchResult={this.displaySearchResult}
                                                 closeModal={this.closeModal}
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
                                                <h1>React - Pagination Example with logic like Google</h1>
                                                {_.map(pageOfItems,(item) =>
                                                    <div key={item.id}>{item.name}</div>
                                                )}
                                                <Pagination items={exampleItems} onChangePage={this.onChangePage} />
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                    {/*<Pagination>*/}
                                        {/*<Pagination.First />*/}
                                        {/*<Pagination.Prev />*/}
                                        {/*<Pagination.Item>{1}</Pagination.Item>*/}
                                        {/*<Pagination.Item>{2}</Pagination.Item>*/}
                                        {/*<Pagination.Item>{3}</Pagination.Item>*/}
                                        {/*<Pagination.Item>{4}</Pagination.Item>*/}

                                        {/*<Pagination.Ellipsis />*/}

                                        {/*<Pagination.Item>{10}</Pagination.Item>*/}
                                        {/*<Pagination.Item>{11}</Pagination.Item>*/}
                                        {/*<Pagination.Item active>{12}</Pagination.Item>*/}
                                        {/*<Pagination.Item>{13}</Pagination.Item>*/}
                                        {/*<Pagination.Item disabled>{14}</Pagination.Item>*/}

                                        {/*<Pagination.Ellipsis />*/}
                                        {/*<Pagination.Item>{20}</Pagination.Item>*/}
                                        {/*<Pagination.Next />*/}
                                        {/*<Pagination.Last />*/}
                                    {/*</Pagination>;*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
