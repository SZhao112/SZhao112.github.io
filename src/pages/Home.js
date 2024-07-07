import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <div style={{ backgroundImage: 'url(home_background.jpg)', backgroundSize: 'cover', padding: '150px 0', opacity: 1, textAlign: 'center' }}>
            <h1 style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '50px' , opacity: 1.0}}>Welcome to Color Experts</h1>
            <p style={{ fontSize: '1.5em' , opacity: 1.0}}>Your trusted partner in choosing the best colors for your spaces.</p>
          </div>
        </Col>
      </Row>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={3} className="text-center mb-4">
            <div className="card h-100">
              <img src="home_color.jpg" alt="Explore Colors" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-1">Intro of the Colors</h5>
                <p className="card-text flex-grow-1">Learn about different color options available for your projects.</p>
                <div className="mt-auto">
                  <Button as={Link} to="/explore-colors" variant="primary">Explore Colors</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="card h-100">
              <img src="home_project.jpg" alt="View Projects" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-1">Intro of Past Projects</h5>
                <p className="card-text flex-grow-1">See examples of projects we've helped with in the past.</p>
                <div className="mt-auto">
                  <Button as={Link} to="/view-projects" variant="primary">View Projects</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="card h-100">
              <img src="home_request.jpg" alt="Make Your Request" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-1">Make Your Request</h5>
                <p className="card-text flex-grow-1">Submit your own project request and get started today.</p>
                <div className="mt-auto">
                  <Button as={Link} to="/register" variant="primary">Make Your Request</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;







