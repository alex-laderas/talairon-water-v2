import Login from '../src/pages/login'
import Register from '../src/pages/register'
import User from './pages/user';
import Admin from './pages/admin'
import { Route, Routes } from "react-router"
import './App.css';

function App() {

  return (
      <div className="main">
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/user/*' element={<User />}/>
          <Route exact path='/admin/*' element={<Admin/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
