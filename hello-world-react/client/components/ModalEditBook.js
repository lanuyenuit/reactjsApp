import React from 'react';

import _ from  'lodash';


export default class ModalAddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const {closeModal, handleInputTitle, handleInputAuthor, editOBJ, SaveBook} = this.props;
        return (

            <div className="modal fade in" id="modal-default" style={{display: "block"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                    onClick={()=>closeModal('clickEditBook')}>
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
                                        <td className="sorting_1">{editOBJ.id}</td>
                                        <td><input type="text"
                                                   className="form-control"
                                                   id="addTitle"
                                                   placeholder="title"
                                                   defaultValue={editOBJ.title}
                                                   onChange={(e)=>handleInputTitle(e, 'title')}
                                            />
                                        </td>
                                        <td><input type="text"
                                                   className="form-control"
                                                   id="addAuthor"
                                                   placeholder="author"
                                                   defaultValue={editOBJ.author}
                                                   onChange={(e)=>handleInputAuthor(e, 'author')}
                                             />
                                        </td>
                                        <td style={{width: '14%'}}>
                                            <button><i className="fa fa-edit"></i></button>
                                            <button><i className="fa fa-ban"></i></button>
                                        </td>

                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-default pull-left"
                                    data-dismiss="modal"
                                    onClick={()=>closeModal('clickEditBook')}>
                                Close</button>
                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={() => SaveBook(closeModal('clickEditBook'))}

                            >Save</button>
                        </div>
                    </div>
                </div>
            </div>)

    }
}


