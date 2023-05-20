import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { home } from './pages/home/home';
import { login } from './pages/login/login';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={login} />
        <Route path="/home" component={home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
