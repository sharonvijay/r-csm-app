import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RaiseIssue from './pages/RaiseIssue';
import Login from './pages/Login';
import Register from './pages/Register';
import Status from './pages/Status';
import ResolveIssue from './pages/ResolveIssue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/raise-issue' element={<RaiseIssue/>}/>
        <Route path='/resolve-issue' element={<ResolveIssue/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/status' element={<Status/>}/>
      </Routes>
    </Router>
  );
}

export default App;
