import {
  CAHNGE_INPUT_VALUE,
  ADD_LIST_VALUE,
  INIT_LIST,
  DELETE_ITEM,
} from './actionType'
import { service } from '../axios/index'

export const changeInputValueAction = (value) => ({
  type: CAHNGE_INPUT_VALUE,
  value,
})

export const addListItemAction = () => ({
  type: ADD_LIST_VALUE,
})

export const initListAction = (value) => ({
  type: INIT_LIST,
  value,
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
})

export const getToDoList = () => {
  return (dispatch) => {
    service({
      method: 'get',
      url: '/api/todolist',
    })
      .then((res) => {
        dispatch(initListAction(res.data))
      })
      .catch((err) => {
        alert(err)
      })
  }
}
