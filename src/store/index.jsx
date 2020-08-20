import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoReduce from '../reduces/index'
import TodoSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(todoReduce, enhancer)

sagaMiddleware.run(TodoSaga)

export default store
