import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Register from './components/auth/register';
import Login from './components/auth/login';
const App = () => (
  <Router>
    <Fragment>
       <Navbar />

       <section className="container">
         <Routes>
                 <Route exact path='/' element={<Landing />} />
           <Route exact path='/register' element={<Register />} />
           <Route exact path='/login' element={<Login />} />
         </Routes>
       </section> 

    </Fragment>
  </Router>
)




export default App;
