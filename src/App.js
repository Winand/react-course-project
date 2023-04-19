import { useState } from 'react'
import {EmployeeList} from './components/EmployeeList';
import {EmployeeCard} from './components/EmployeeCard';
import './App.css';

function App() {
  const [currentEmployee, setCurrentEmployee] = useState(undefined);

  const onItemClick = (user) => {
    console.log(user);
    setCurrentEmployee(user);
  }

  const onGoBackClick = () => {
    setCurrentEmployee(undefined);
  }

  return (
    <div className="App">
      {currentEmployee ? <EmployeeCard currentEmployee={currentEmployee} onGoBack={onGoBackClick}/> : <EmployeeList onItemClick={onItemClick}/>}
    </div>
  );
}

export default App;
