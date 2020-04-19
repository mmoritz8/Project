import React from "react";
import { Col, Grid, Row } from "../components/Grid";
import PostsList from "../components/PostsList";
import CenteredTabs from '../components/CenteredTabs';


const Home = () => {
  return (
    <Grid>
      <Row>
        <Col size="md-6 sm-12">
          <CenteredTabs></CenteredTabs>

          <PostsList />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
