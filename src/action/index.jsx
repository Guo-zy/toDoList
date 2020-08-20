import {
  CAHNGE_INPUT_VALUE,
  ADD_LIST_VALUE,
  INIT_LIST,
  DELETE_ITEM,
} from './actionType'

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
