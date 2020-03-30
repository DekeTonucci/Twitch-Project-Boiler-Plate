import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div style={{width:"100vw", height:"100vh"}}>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
  );
}
export default App;
