import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'

const ToDoList = (props) => {
  const { textList, handleDeleteItem } = props
  return (
    <List
      style={{ margin: '10px 0px', width: '500px' }}
      bordered
      dataSource={textList}
      renderItem={(item, index) => (
        <List.Item
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleDeleteItem(index)
          }}
        >
          {item}
        </List.Item>
      )}
    />
  )
}

ToDoList.propTypes = {
  handleDeleteItem: PropTypes.func.isRequired,
  textList: PropTypes.array.isRequired,
}

export default ToDoList
