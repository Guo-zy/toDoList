import React from 'react'
import ToDoInput from '../ToDoInput/index'
import ToDoList from '../ToDoList/index'
import { connect } from 'react-redux'
import {
  CAHNGE_INPUT_VALUE,
  ADD_LIST_VALUE,
  DELETE_ITEM,
  GET_INIT_LIST,
} from '../../action/actionType'

class ToDoContainer extends React.Component {
  componentDidMount() {
    const { getInitList } = this.props
    getInitList()
  }

  render() {
    const {
      inputValue,
      textList,
      changeInputValue,
      addListItem,
      deleteItem,
    } = this.props
    return (
      <div>
        <ToDoInput
          handleInputValue={changeInputValue}
          handleOnclick={addListItem}
          inputValue={inputValue}
        />
        <ToDoList handleDeleteItem={deleteItem} textList={textList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    textList: state.textList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      dispatch({
        type: CAHNGE_INPUT_VALUE,
        value: e.target.value,
      })
    },
    addListItem() {
      dispatch({
        type: ADD_LIST_VALUE,
      })
    },
    deleteItem(index) {
      dispatch({
        type: DELETE_ITEM,
        index,
      })
    },
    getInitList() {
      dispatch({
        type: GET_INIT_LIST,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer)
