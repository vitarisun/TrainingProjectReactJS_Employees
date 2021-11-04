import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employees-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {
  const data = [
    { name: 'John C.', salary: 1000, increase: false, id: 1 },
    { name: 'Alex M..', salary: 800, increase: true, id: 2 },
    { name: 'Carl W', salary: 4000, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
