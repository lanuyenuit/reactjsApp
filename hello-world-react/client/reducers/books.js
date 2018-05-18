import * as types from './../constants/ActionTypes'

let initialState = [
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
]

let myReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return state
        default: return state
    }
}

export default myReducer
