import {createStore} from 'redux'
import {status, sort} from './action/index'
import myReducer from './reducers/index'


const store = createStore(myReducer)

console.log('default',store.getState());
//Thuc hien cong viec thay doi status


store.dispatch(status())

console.log('toggle',store.getState());

store.dispatch(sort({
    by: 'name',
    value: -1
}))
console.log('sort', store.getState())




