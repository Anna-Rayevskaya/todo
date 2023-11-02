import { Component } from 'react'
import './NewTaskForm.css'

class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { addItem } = this.props
    const { label } = this.state
    e.preventDefault()
    addItem(label)
    this.setState({
      label: '',
    })
  }

  render() {
    const { label } = this.state
    return (
      <form className="header" onSubmit={this.onSubmit}>
        <h1>My Todo List</h1>
        <input
          name="name"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onChange}
          value={label}
        />
      </form>
    )
  }
}

const defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
}

export default { ...NewTaskForm, defaultProps }
