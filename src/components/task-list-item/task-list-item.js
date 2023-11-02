import "./task-list-item.css";
import { Component } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

export default class TaskListItem extends Component {
  state = {
    done: false,
  };

  static propTypes = {
    label: PropTypes.string,
    done: PropTypes.bool,
  };

  handleChange = () => {
    const { onToggleDone } = this.props;
    onToggleDone();
    this.setState({
      done: !this.state.done,
    });
  };

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done } =
      this.props;

    let className = "";
    if (done) {
      className += "completed";
    }
    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.handleChange}
            defaultChecked={done}
          />
          <label>
            <span className="description" onClick={onToggleDone}>
              {label}
            </span>
            <span className="created">
              created{" "}
              {formatDistanceToNow(new Date(), { includeSeconds: true })}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={onToggleImportant}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
