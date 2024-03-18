import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import StudentList from './StudentList';
import StudentDetail from './StudentDetail';
import StudentAdd from './StudentAdd';
import StudentEdit from './StudentEdit';

function App() {

  return (
    <div className="App">

      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Student List</Link>
        <Link to="/add">Add New Student</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/add" element={<StudentAdd />} />
        <Route path="/edit/:id" element={<StudentEdit />} />
      </Routes>

      
    </div>
  );
}

export default App;
