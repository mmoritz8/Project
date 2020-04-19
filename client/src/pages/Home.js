import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PostsList from "../components/PostsList";
import CenteredTabs from "../components/CenteredTabs";
import MoreTabs from "../components/MoreTabs";
import Jumbotron from "../components/Jumbotron";

import PostOne from '../components/PostOne';
import PostTwo from '../components/PostTwo';

const Home = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <div className="h2">
          <div className="p">Posts</div>

        </div>
      </Jumbotron>
      <CenteredTabs>

      </CenteredTabs>
      <MoreTabs></MoreTabs>

      <Row>
        <Col size="md-6 sm-12">
          <PostsList />
          <PostOne></PostOne>
          <PostTwo></PostTwo>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
