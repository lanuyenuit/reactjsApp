import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux'


import Pagination from './Pagination';

class ModalAddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksSearch: [],
            activePage: 1,
            pageOfItems: [],
            currentPage: 1
        }

    }

    onChangePage = (pageOfItems, currentPage) => {
        this.setState({
            pageOfItems: pageOfItems,
            currentPage
        });
    };

    renderRows = () => {
        let {resultIDs} = _.cloneDeep(this.props);
        let {pageOfItems, currentPage} = _.cloneDeep(this.state);
        let booksFound = [];

        let result = _.map(pageOfItems, (book, i) => {
            let checkID = _.includes(resultIDs, book.id);
            if (checkID) {
                booksFound.push(book);
                return (
                    <tr key={i}>
                        <td>{(10 * (currentPage - 1) + i + 1)}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                )
            }
        });
        return result;
    };

    componentDidMount() {
        let {books, resultIDs} = _.cloneDeep(this.props);
        let booksSearch = [];

        _.each(books, (book, i) => {
            let checkID = _.includes(resultIDs, book.id);

            if (checkID) {
                booksSearch.push(book);
            }
        });

        this.setState({
            booksSearch
        })
    }

    render() {
        const {closeModal} = this.props;
        let {booksSearch} = _.cloneDeep(this.state);
        console.log('bbooks',this.props.books)
        return (
            <div className="modal fade in" id="modal-default" style={{display: "block"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => (closeModal('clickSearchBook'))}>
                                <span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Result</h4>
                        </div>

                        <div className="modal-body">

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
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.renderRows()
                                    }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer" style={{borderTop: 'none'}}>
                            {
                                booksSearch.length > 0 &&
                                <Pagination items={booksSearch} onChangePage={this.onChangePage}/>
                            }
                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={() => (closeModal('clickSearchBook'))}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        books: state.books
    }

}

export default connect(mapStateToProps, null)(ModalAddBook)
