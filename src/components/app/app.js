import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employees-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John C.',
          salary: 1000,
          increase: false,
          seeStar: true,
          id: 1,
        },
        {
          name: 'Alex M..',
          salary: 800,
          increase: true,
          seeStar: false,
          id: 2,
        },
        {
          name: 'Carl W',
          salary: 4000,
          increase: false,
          seeStar: false,
          id: 3,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      // return {
      //   data: newArr,
      // };
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addEmployees = (name, salary) => {
    const newEmployees = {
      name,
      salary,
      increase: false,
      seeStar: false,
      id: genID(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newEmployees];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const incriced = this.state.data.filter((item) => item.increase).length;

    return (
      <div className="app">
        <AppInfo employees={employees} incriced={incriced} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addEmployees} />
      </div>
    );
  }
}

function genID() {
  return Math.floor(Math.random() * 100000);
}

export default App;
