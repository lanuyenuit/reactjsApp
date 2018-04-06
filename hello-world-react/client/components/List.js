import React from 'react';
import {Pagination} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import _ from 'lodash'

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
            blogPosts: [],
            currentPageNumber: 1,
            totalItems: 1,
            itemsPerPage: 10
        }
    }

    componentDidMount() {

        let {booksPaging, currentPageNumber, totalItems, itemsPerPage} = _.cloneDeep(this.state);
            this.setState({
                blogPosts: booksPaging,
                currentPageNumber: currentPageNumber,

                totalItems: totalItems,
                itemsPerPage: itemsPerPage
            });

    }

    handleSelect = (number) => {
        this.setState({currentPageNumber: number});
    }


    render() {
        let totalPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);
        return (
            <div>
                <Table blogPosts={this.state.blogPosts}
                       onDelete={this.onDelete.bind(this)} />

                <Pagination
                    bsSize="medium"
                    items={totalPages}
                    activePage={this.state.currentPageNumber}
                    onSelect={this.handleSelect}/>
            </div>
        );
    }
}
