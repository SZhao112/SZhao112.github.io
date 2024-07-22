import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Register.css';

function Register() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/');
    }, 2000); // 2秒后跳转到首页
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundImage: 'url(Register.jpg)', backgroundSize: 'cover' }}>
      <Row className="w-100 justify-content-center">
        <Col md={6}>
          <Card className="p-4" style={{ background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', marginTop: 'auto', marginBottom: '50px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4" style={{ fontSize: '2em', fontWeight: 'bold', color: '#333' }}>{t('register')}</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>{t('your_name')}</Form.Label>
                  <Form.Control type="text" placeholder={t('yourName')} required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>{t('emailAddress')}</Form.Label>
                  <Form.Control type="email" placeholder={t('emailAddress')} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>{t('password')}</Form.Label>
                  <Form.Control type="password" placeholder={t('password')} required />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>{t('confirmPassword')}</Form.Label>
                  <Form.Control type="password" placeholder={t('confirmPassword')} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-4" block>
                  {t('registerButton')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('registrationSuccessful')}</Modal.Body>
      </Modal>
    </Container>
  );
}

export default Register;







