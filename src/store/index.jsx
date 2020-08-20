import { createStore } from 'redux'
import todoReduce from '../reduces/index'

const store = createStore(
  todoReduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
