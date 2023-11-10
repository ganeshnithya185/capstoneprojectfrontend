import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    axios
      .post(
        "https://backendtask-y3bj.onrender.com/api/user/login",
        { email, password },
        { headers: headers }
      )
      .then((result) => {
        console.log(result);
        const token = result.data;
        setToken(token);
        Setemail("");
        Setpassword("");
        navigate("/admin");
      });
  };
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/asset/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            THE BOOK SHOP
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="login-container">
        <div className="container-login">
          <header className="login">
            <h1>Login</h1>
          </header>
          <div className="form-login">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="p-2">Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => Setemail(e.target.value)}
                  type="email"
                  placeholder="Enter your Email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="p-2">Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => Setpassword(e.target.value)}
                  type="password1"
                  placeholder="Enter Your password"
                />
              </Form.Group>
              <Button className="btn-submit m-2 p-2" type="submit" variant="success">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
