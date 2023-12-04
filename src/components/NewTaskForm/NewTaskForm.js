/* eslint-disable no-console */
import { Component } from 'react'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    addItem: () => {},
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
    console.log(e)
    addItem(label)
    this.setState({
      label: '',
    })
  }

  render() {
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    const { label } = this.state
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form header" onSubmit={this.onSubmit}>
          <input name="name" className="new-todo" placeholder="Task" onChange={this.onChange} value={label} />
          <input className="new-todo-form__timer" placeholder="Min" />
          <input className="new-todo-form__timer" placeholder="Sec" />
          <button type="submit" className="battonSabmit">
            Submit
          </button>
        </form>
      </header>
    )
  }
}
