import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
