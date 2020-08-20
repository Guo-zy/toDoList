import React from 'react'
// import PropTypes from 'prop-types'
import ToDoInput from '../ToDoInput/index'
import ToDoList from '../ToDoList/index'
import store from '../../store/index'
import {
  changeInputValueAction,
  addListItemAction,
  deleteItemAction,
  getToDoList,
} from '../../action/index'

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentDidMount() {
    store.dispatch(getToDoList())
  }

  handleInputValue = (e) => {
    store.dispatch(changeInputValueAction(e.target.value))
  }

  handleOnclick = () => {
    store.dispatch(addListItemAction())
  }

  handleDeleteItem = (index) => {
    store.dispatch(deleteItemAction(index))
  }

  render() {
    const { inputValue, textList } = this.state
    return (
      <div>
        <ToDoInput
          handleInputValue={this.handleInputValue}
          handleOnclick={this.handleOnclick}
          inputValue={inputValue}
        />
        <ToDoList
          handleDeleteItem={this.handleDeleteItem}
          textList={textList}
        />
      </div>
    )
  }
}

export default ToDoContainer
