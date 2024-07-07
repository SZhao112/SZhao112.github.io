import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Register.css';

function Register() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundImage: 'url(Register.jpg)', backgroundSize: 'cover' }}>
      <Row className="w-100 justify-content-center">
        <Col md={6}>
          <Card className="p-4" style={{ background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', marginTop: 'auto', marginBottom: '50px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4" style={{ fontSize: '2em', fontWeight: 'bold', color: '#333' }}>Register</Card.Title>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm your password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-4" block>
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;




