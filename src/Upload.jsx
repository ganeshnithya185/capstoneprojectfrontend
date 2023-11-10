import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import ReactMarkdown from "react-markdown";
const Upload = () => {
  const [booktitle, Setbooktitle] = useState("");
  const [bookdescription, Setbookdescription] = useState("");
  const [authorname, Setauthorname] = useState("");
  const [bookurl, Setbookurl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/book/create", {
        booktitle,
        bookdescription,
        authorname,
        bookurl,
      })
      .then((result) => {
        console.log(result);
        Setbooktitle("");
        Setbookdescription("");
        Setauthorname("");
        Setbookurl("");
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
          <Nav.Item>
            <Nav.Link className="admin nav-link-with-underline" href="/admin">
              Admin
            </Nav.Link>
          </Nav.Item>
        </Container>
      </Navbar>
      <header>
        <div className="header">
          <div className="row">
            <div className="col-8">
              <ReactMarkdown>{`# Join to access our best free & discounted ebooks.`}</ReactMarkdown>
            </div>
            <div className="col-4">
              <img
                className="image-2"
                alt=""
                src="/asset/bookimage2.webp"
                width="200px"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container books text-center p-4">
        {/* <h1>Upload Books</h1> */}
        <ReactMarkdown>{`# Upload Books`}</ReactMarkdown>
      </div>
      <div className="container bookupload">
        <Form className="form-body" onSubmit={handleSubmit}>
          <InputGroup className="input-group">
            <InputGroup.Text>Book Title</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={booktitle}
              onChange={(e) => Setbooktitle(e.target.value)}
              aria-label="With textarea"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Book Description</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={bookdescription}
              onChange={(e) => Setbookdescription(e.target.value)}
              aria-label="With textarea"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Author Name</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={authorname}
              onChange={(e) => Setauthorname(e.target.value)}
              aria-label="With textarea"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Book URL</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={bookurl}
              onChange={(e) => Setbookurl(e.target.value)}
              aria-label="With textarea"
            />
          </InputGroup>
          <Button
            className="upload-btn m-2 px-2"
            type="submit"
            variant="success"
          >
            Upload
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Upload;
