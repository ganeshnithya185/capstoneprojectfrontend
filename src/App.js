// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Login from "./Login";
import Admin from "./Admin";
import Viewer from "./Viewer";
import Upload from "./Upload";
import Editpage from "./Editpage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="viewer" element={<Viewer />} />
          <Route path="update" element={<Upload />} />
          <Route path="edit/:id" element={<Editpage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
