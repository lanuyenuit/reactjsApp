let initialState = {
        by: 'name',
        value: 1 // 1 : tang, -1: giam
}
let myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {
        let {by, value} = action.sort

        return {
            sort: {
                by,
                value
            }
        }
    }
    return state
}

export default myReducer
