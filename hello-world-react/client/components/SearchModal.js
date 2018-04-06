import React from 'react';
import _ from 'lodash';

export default class ModalAddBook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {closeModal, books, resultIDs} = this.props;
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
                                        _.map(books, (book, i) => {
                                            let checkID = _.includes(resultIDs, book.id);
                                            if (checkID) {
                                                return (
                                                    <tr key={i}>
                                                        <td>{++i}</td>
                                                        <td>{book.title}</td>
                                                        <td>{book.author}</td>
                                                    </tr>
                                                )
                                            }
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={() => (closeModal('clickSearchBook'))}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>)

    }
}


