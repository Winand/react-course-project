import {Header} from './components/Header';
import {SearchBar} from './components/SearchBar';
import {EmployeeList} from './components/EmployeeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default App;
