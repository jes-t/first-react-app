import React from 'react'
import { Input } from 'antd'

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }
  activedEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deactivedEditMode = () => {
    this.setState({
      editMode: false,
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activedEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <Input.TextArea
              onBlur={this.deactivedEditMode}
              value={this.props.status}
              style={{ width: '300px' }}
              autoSize
              autoFocus
            />
          </div>
        )}
      </div>
    )
  }
}
