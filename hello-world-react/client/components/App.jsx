import React from 'react';
import _ from 'lodash';
// import ModalAddBook from './ModalAddBook.js';
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickAddBook: false,
            book : [
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
            ]
        }
    }

    addBook = () => {
        this.setState({clickAddBook:true});
    }

    closeModal = () => {
        this.setState({clickAddBook:false});
    }

    displayBookTable = () => {
        return this.state.book.map((data, i) => {
            return (
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.author}</td>
                    <td>
                        <button><i className="fa fa-edit"></i></button>
                        <button><i className="fa fa-ban"></i></button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        let {clickAddBook} = _.clone(this.state);
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
                                    <i className="fa fa-dashboard"></i> <span>Book</span>
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
                            <button onClick={()=>this.addBook()}>Add new book</button>
                            {/*{clickAddBook &&*/}
                            {/*<ModalAddBook closeModal={this.closeModal}/>}*/}
                        </div>
                        <div className="box-body">
                            <div id="example2_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                                <div className="row">
                                    <div className="col-sm-6"></div>
                                    <div className="col-sm-6"></div>
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
                                    <div className="col-sm-7">
                                        <div className="dataTables_paginate paging_simple_numbers"
                                             id="example2_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button previous disabled"
                                                    id="example2_previous"><a href="#" aria-controls="example2"
                                                                              data-dt-idx="0" tabindex="0">Previous</a>
                                                </li>
                                                <li className="paginate_button active"><a href="#"
                                                                                          aria-controls="example2"
                                                                                          data-dt-idx="1"
                                                                                          tabindex="0">1</a></li>
                                                <li className="paginate_button "><a href="#" aria-controls="example2"
                                                                                    data-dt-idx="2" tabindex="0">2</a>
                                                </li>
                                                <li className="paginate_button "><a href="#" aria-controls="example2"
                                                                                    data-dt-idx="3" tabindex="0">3</a>
                                                </li>
                                                <li className="paginate_button "><a href="#" aria-controls="example2"
                                                                                    data-dt-idx="4" tabindex="0">4</a>
                                                </li>
                                                <li className="paginate_button "><a href="#" aria-controls="example2"
                                                                                    data-dt-idx="5" tabindex="0">5</a>
                                                </li>
                                                <li className="paginate_button "><a href="#" aria-controls="example2"
                                                                                    data-dt-idx="6" tabindex="0">6</a>
                                                </li>
                                                <li className="paginate_button next" id="example2_next"><a href="#"
                                                                                                           aria-controls="example2"
                                                                                                           data-dt-idx="7"
                                                                                                           tabindex="0">Next</a>
                                                </li>
                                            </ul>
                                        </div>
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
