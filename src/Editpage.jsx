import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the book ID from the URL
  const [bookData, setBookData] = useState({
    booktitle: "",
    bookdescription: "",
    authorname: "",
    bookurl: "",
  });

  useEffect(() => {
    // Fetch the book data using the book ID
    axios.get(`http://localhost:4000/api/book/get/${id}`).then((response) => {
      const book = response.data; // Assuming the response contains book details
      setBookData({
        booktitle: book.booktitle,
        bookdescription: book.bookdescription,
        authorname: book.authorname,
        bookurl: book.bookurl,
      });
    });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the updated book data
    const updatedBook = {
      booktitle: bookData.booktitle,
      bookdescription: bookData.bookdescription,
      authorname: bookData.authorname,
      bookurl: bookData.bookurl,
    };

    axios
      .put(`http://localhost:4000/api/book/update/${id}`, updatedBook)
      .then((result) => {
        console.log(result);
        // Redirect to a different page or navigate back to the book listing page
        navigate("/"); // You may want to navigate back to the book listing page or another suitable page
      })
      .catch((error) => {
        console.error("Error updating book:", error);
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
        <ReactMarkdown>{`# Update the Books`}</ReactMarkdown>
      </div>
      <div className="container bookupload">
        <Form className="form-body" onSubmit={handleSubmit}>
          <InputGroup className="input-group">
            <InputGroup.Text>Book Title</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={bookData.booktitle}
              onChange={(e) =>
                setBookData({ ...bookData, booktitle: e.target.value })
              }
              aria-label="With textarea"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Book Description</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={bookData.bookdescription}
              onChange={(e) =>
                setBookData({ ...bookData, bookdescription: e.target.value })
              }
              aria-label="With textarea"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Author Name</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={bookData.authorname}
              onChange={(e) =>
                setBookData({ ...bookData, authorname: e.target.value })
              }
              aria-label="With textarea"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Book URL</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={bookData.bookurl}
              onChange={(e) =>
                setBookData({ ...bookData, bookurl: e.target.value })
              }
              aria-label="With textarea"
            />
          </InputGroup>
          <Button
            onClick={() => navigate("/admin")}
            className="upload-btn m-2 px-2"
            type="submit"
            variant="success"
          >
            Save
          </Button>
          <Button
            className="upload-btn m-2 px-2"
            type="button"
            variant="danger"
            onClick={() => navigate("/admin")} // Cancel button navigates back to the book listing page
          >
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
