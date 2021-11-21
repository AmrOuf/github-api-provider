import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Private from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Repos from "./components/Repos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/repos' element={<Repos />} />
          <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
