import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import CenteredTabs from "../components/CenteredTabs";
import MoreTabs from '../components/MoreTabs';
import Jumbotron from '../components/Jumbotron'

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <div className="h2">
                            <div className="p">Create a Post:</div>

                        </div>
                    </Jumbotron>
                    <CenteredTabs>

                    </CenteredTabs>                    <MoreTabs></MoreTabs>
                    <CreatePostForm />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
