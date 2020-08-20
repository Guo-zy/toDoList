import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'antd'

class ToDoInput extends React.Component {
  render() {
    const { inputValue, handleInputValue, handleOnclick } = this.props
    return (
      <div style={{ margin: '20px 20px' }}>
        <label>
          <Input
            value={inputValue}
            onChange={handleInputValue}
            style={{ width: '300px' }}
            placeholder="todo info"
          ></Input>
          <Button type="primary" onClick={handleOnclick}>
            提交
          </Button>
        </label>
      </div>
    )
  }
}

ToDoInput.porpstypes = {
  handleOnclick: PropTypes.func.isRequired,
  handleInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}

export default ToDoInput
