import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AddItems from './Components/AddItems/AddItems';
import ManageItems from './Components/ManageItems/ManageItems';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
