//creara un store en redux
import {createStore, combineReducers} from 'redux'
import results from './reducers/results'
import suggestions from './reducers/suggestions'
import currentItem from './reducers/currentItem'

//cada una de estas propiedades es un reducer
const reducer = combineReducers({
    results,
    suggestions,
    currentItem

});

const store = createStore(reducer)

export default store
