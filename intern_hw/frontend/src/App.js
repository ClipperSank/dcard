import logo from './logo.svg';
import SignIn from './containers/SignIn.js';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<SignIn/>} />
      </Route>
    </Routes>
  );
}

export default App;
