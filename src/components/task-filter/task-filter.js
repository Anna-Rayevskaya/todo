import './task-filter.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
export default class Filter extends Component {
  state = {
      activeButton: "all"
    }

  static defaultProps = {
    handleButtonClick: () => {},
    done:0
  }
  static propTypes = {
    done: PropTypes.number
}

  handleButtonClick = (filterType) => {
    const { todoFilterState } = this.props;
    todoFilterState(filterType);

    this.setState({
      activeButton: filterType
    });
  };

  render() {
    const { done, clearCompleted } = this.props;
    const { activeButton } = this.state;
    
    return (
      <footer className="footer">
        <span className="todo-count">{done} items left</span>
        <ul className="filters">
          <li>
            <button
              className={activeButton === "all" ? "selected" : ""}
              onClick={() => this.handleButtonClick("all")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={activeButton === "active" ? "selected" : ""}
              onClick={() => this.handleButtonClick("active")}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={activeButton === "completed" ? "selected" : ""}
              onClick={() => this.handleButtonClick("completed")}
            >
              Completed
            </button>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
  
}