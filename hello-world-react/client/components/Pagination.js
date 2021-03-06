import React  from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number
};

const defaultProps = {
    initialPage: 1
};

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pager: {}};
    }

    initPage(props){
        let {items, initialPage} = _.cloneDeep(props);
        if (items && items.length) {
            this.setPage(initialPage, props);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.items.length != this.props.items.length){
            this.initPage(nextProps)
        }
    }

    componentWillMount() {
        this.initPage(this.props)
    }

    componentWillUpdate(nextProps, nextState) {
        let {items} = _.cloneDeep(this.props);
        if (items !== nextProps.items) {
            // this.setPage(this.props.initialPage);

        }
    }

    setPage(page, props = this.props) {
        let {items, onChangePage} = _.cloneDeep(props);
        let {pager} = _.cloneDeep(this.state);

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page);

        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({pager: pager});

        onChangePage(pageOfItems, pager.currentPage);
    }

    getPager = (totalItems, currentPage, pageSize) => {
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;

        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;

        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let pages = _.range(startPage, endPage + 1);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {

        let {pager} = _.cloneDeep(this.state);
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        let checkCurrentPageDisabled = pager.currentPage === 1 ? 'disabled' : '';
        let styleCurrentPage = pager.currentPage === 1 ? '' : 'pointer';
        let checkTotalPage = pager.currentPage === pager.totalPages ? 'disabled' : '';
        let styleTotalPage = pager.currentPage === pager.totalPages ? '' : 'pointer';

        return (
            <ul className="pagination">
                <li className={checkCurrentPageDisabled}
                    style={{cursor: styleCurrentPage}}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={checkCurrentPageDisabled}
                    style={{cursor: styleCurrentPage}}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index}
                        className={pager.currentPage === page ? 'active' : '' }
                        style={{cursor: 'pointer'}}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={checkTotalPage}
                    style={{cursor: styleTotalPage}}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li
                    className={checkTotalPage}
                    style={{cursor: styleTotalPage}}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
