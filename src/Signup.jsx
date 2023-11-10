    import React, { useState } from "react";
    import Form from "react-bootstrap/Form";
    import Button from "react-bootstrap/Button";
    import axios from "axios";
    import { useNavigate } from "react-router-dom";
    import Container from "react-bootstrap/Container";
    import Navbar from "react-bootstrap/Navbar";
    const Signup = () => {
    const [username, Setusername] = useState("");
    const [email, Setemail] = useState("");
    const [password, Setpassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:4000/api/user/register", {
            username,
            email,
            password,
        })
        .then((result) => {
            console.log(result);
            Setusername("");
            Setemail("");
            Setpassword("");
            navigate("login");
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
        <div className="signup-container">
            <div className="container">
            <header className="signup">
                <h1>Signup</h1>
            </header>
            <div className="form-design">
                <Form onSubmit={handleSubmit}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    value={username}
                    onChange={(e) => Setusername(e.target.value)}
                    type="text"
                    placeholder="Enter your name"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email address</Form.Label>
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    value={password}
                    onChange={(e) => Setpassword(e.target.value)}
                    type="password1"
                    placeholder="password"
                    />
                </Form.Group>
                <Button type="submit" variant="success">
                    Submit
                </Button>
                <Button type="submit" className="btn-login" variant="secondary">
                    Login
                </Button>
                </Form>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Signup;
