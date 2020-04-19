import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import CenteredTabs from '../components/CenteredTabs';

const Signup = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);


    window.location.href = './home';
  }

  return (
    <Container>
      <CenteredTabs />
      <div>
        <div className="mt-4">
          <h2>Welcome!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Container className="mt-3 px-5">
            <Row className="form-group">
              <Col size="12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={e => setUsername(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <button className="btn btn-success" type="submit">
              Submit
          </button>
          </Container>
          <Container className="mt-4">
            <h3>Hello {username}!</h3>
          </Container>
        </form>
      </div>
    </Container>
  );

}
export default Signup;
