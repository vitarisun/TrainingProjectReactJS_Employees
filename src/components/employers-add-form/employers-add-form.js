import { Component } from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      // prop: e.target.value
      [e.target.name]: e.target.value, // Записываем вс-вщ в объект
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || this.state.name.length < 3 || !this.state.salary)
      return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form" onSubmit={this.onSubmit}>
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
export default EmployersAddForm;
