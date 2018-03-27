import React from 'react';

import _ from  'lodash';


export default class ModalAddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCloseModal : false
        };
    }
    closeModal = () => {
        this.setState({clickCloseModal:true})
    }


    render() {
        const {closeModal} = this.props
        return (
        <div className="modal fade in" id="modal-default" style={{display: "block"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>closeModal()}>
                            <span aria-hidden="true">×</span></button>
                        <h4 className="modal-title">New Book</h4>
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
                                    <th className="sorting" tabindex="0" aria-controls="example2"
                                        rowspan="1" colspan="1"
                                        aria-label="Engine version: activate to sort column ascending">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">1</td>
                                    <td>Firefox 1.0</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td>
                                        <button><i className="fa fa-edit"></i></button>
                                        <button><i className="fa fa-ban"></i></button>
                                    </td>

                                </tr>
                                <tr role="row" className="even">
                                    <td className="sorting_1">2</td>
                                    <td>Firefox 1.5</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td>
                                        <button><i className="fa fa-edit"></i></button>
                                        <button><i className="fa fa-ban"></i></button>
                                    </td>

                                </tr>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">3</td>
                                    <td>Firefox 2.0</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td>
                                        <button><i className="fa fa-edit"></i></button>
                                        <button><i className="fa fa-ban"></i></button>
                                    </td>

                                </tr>
                                <tr role="row" className="even">
                                    <td className="sorting_1">4</td>
                                    <td>Firefox 3.0</td>
                                    <td>Win 2k+ / OSX.3+</td>
                                    <td>
                                        <button><i className="fa fa-edit"></i></button>
                                        <button><i className="fa fa-ban"></i></button>
                                    </td>

                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default pull-left" data-dismiss="modal" onClick={()=>closeModal()}>
                            Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>)

    }
}


