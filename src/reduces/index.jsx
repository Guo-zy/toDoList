import {
  CAHNGE_INPUT_VALUE,
  ADD_LIST_VALUE,
  INIT_LIST,
  DELETE_ITEM,
} from '../action/actionType'

const defalutState = {
  inputValue: '',
  textList: [],
}

export default (state = defalutState, action) => {
  if (action.type === CAHNGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_LIST_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.textList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.textList = action.value
    return newState
  }
  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.textList.splice(action.index, 1)
    return newState
  }
  return state
}
