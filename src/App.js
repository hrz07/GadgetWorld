import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AddItems from './Components/AddItems/AddItems';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Notfound from './Components/NotFound/Notfound';
import UpdatePage from './Components/UpdatePage/UpdatePage';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/additems' element={
          <PrivateRoute>
            <AddItems></AddItems>
          </PrivateRoute>
        }></Route>
        <Route path='/manageitems' element={
          <PrivateRoute>
            <ManageItems></ManageItems>
          </PrivateRoute>
        }></Route>
        <Route path='/myitems' element={
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        }></Route>
        <Route path='/inventory/:id' element={
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        } ></Route>
        <Route path='*' element={ <Notfound></Notfound> } ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
