import { Component } from 'react';
import './employers-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: this.props.salary,
    };
  }

  onSalaryChange = (e) => {
    const { onSalaryChange, name } = this.props;

    this.setState(({ salary }) => ({
      salary: e.target.value,
    }));

    onSalaryChange(name, e.target.value);
  };

  render() {
    const { name, onDelete, onToggleProp, increase, seeStar } = this.props;

    let className = 'list-group-item d-flex justify-content-between';
    if (increase) {
      className += ' increase';
    }
    if (seeStar) {
      className += ' like';
    }

    return (
      <li className={className}>
        <span
          className="list-group-item-label"
          onClick={onToggleProp}
          data-toggle="seeStar"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          // defaultValue={salary + '$'}
          value={this.state.salary}
          onChange={this.onSalaryChange}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={onToggleProp}
            data-toggle="increase"
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
