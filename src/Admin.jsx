import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const Admin = () => {
  const navigate = useNavigate();
  const [data, Setdata] = useState([]);

  console.log(data);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://backendtask-y3bj.onrender.com/api/book/get"
      );
      console.log("Data received:", response.data);
      Setdata(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://backendtask-y3bj.onrender.com/api/book/delete/${id}`
      );
      console.log("res", res);
      // Filter the todos based on the ID and update the state
      const updatedbooks = data.filter((book) => book._id !== id);
      Setdata(updatedbooks);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
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
          <Nav.Item className="d-flex navitem ">
            <Nav.Link className="mr-2 nav-link-with-underline" href="/">
              Signup
            </Nav.Link>
            <Nav.Link className="mr-2 nav-link-with-underline" href="/login">
              Login
            </Nav.Link>

            <Nav.Link className="mr-2 nav-link-with-underline" href="/update">
              Upload
            </Nav.Link>
            <Nav.Link className="ml-2 nav-link-with-underline" href="/edit">
              Editpage
            </Nav.Link>
          </Nav.Item>
        </Container>
      </Navbar>
      {/* //header// */}
      <header>
        <div className="header">
          <div className="row">
            <div className="col-8">
              <ReactMarkdown>{`# Join to access our best free & discounted ebooks.`}</ReactMarkdown>
            </div>
            <div className="col-4">
              <img
                className="image-2 ml-2"
                alt=""
                src="/asset/bookimage2.webp"
                width="200px"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container heading-1">
        <Nav.Link
          className="container nav-link-with-underline m-2"
          href="/viewer"
        >
          Click here to go Markdown Editer
        </Nav.Link>
        <ReactMarkdown>{`# Explore All Deals`}</ReactMarkdown>
      </div>

      <div className="container dropdown">
        <div className="row">
          <div className="col-3">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Action and Adventure
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Advice and How-To
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  American Historical Romance
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Biographies and Memoirs
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Black Stories & Experiences
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Christian Nonfiction
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Crime Fiction</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Historical Fiction
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="col-9">
            <div className="row">
              {data.map((item, index) => {
                return (
                  <>
                    <div key={index} className="d-flex p-2">
                      <div className="col-3">
                        <img src={item.bookimage} alt="" width="180" />
                      </div>
                      <div className="col-9">
                        <ReactMarkdown>{`# ${item.booktitle}`}</ReactMarkdown>

                        <ReactMarkdown children={item.bookdescription} />
                        <ReactMarkdown>{`*${item.authorname}*`}</ReactMarkdown>
                        <Button
                          onClick={() => navigate(`/edit/${item._id}`)}
                          variant="success"
                          className="mr-2"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(item._id)}
                          variant="danger"
                          className="m-2"
                        >
                          Delete  
                        </Button>
                        <Button
                          onClick={() => navigate("/update")}
                          variant="info"
                        >
                          Upload Books
                        </Button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
