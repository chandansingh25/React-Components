import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { Container, Row, Col } from "react-bootstrap";

const PostPage = () => {
  const [selectedNav, setSelectedNav] = useState("Home");

  return (
    <div>
      <Header />
      <Container fluid className="px-0">
        <Row>
          <Col className="col-3">
            <Sidebar
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </Col>
          <Col className="col-9 pt-4">{selectedNav === "Home" ? <PostList /> : <CreatePost />}</Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default PostPage;
