import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  handleLineTrhough = (title, completed) => {
    return completed ? <del>{title}</del> : title;
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div className=" bg-light border ">
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {this.handleLineTrhough(title, completed)}
          <button
            className="btn btn-danger "
            style={btnStyle}
            onClick={this.props.onDelete.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  padding: "2px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
