import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const projects = [
  { name: 'Kitchen Renovation', description: 'A beautiful kitchen painted in warm colors.', imageUrl: 'red.jpg', date: '2023-06-01', color: 'Red' },
  { name: 'Living Room Makeover', description: 'A modern living room with stylish paint.', imageUrl: 'blue.jpg', date: '2023-07-01', color: 'Blue' },
  // 添加更多项目
];

function ViewProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState('');
  const { t } = useTranslation();

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const handleShowReview = () => {
    setReview(t('project_review_comment')); // 生成随机评价
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-5 text-center" style={{ backgroundImage: 'url(gall_background.jpg)', backgroundSize: 'cover', padding: '100px 0' }}>
      <h2 style={{ fontSize: '2.5em', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>{t('gallery')}</h2>
      <Row className="align-items-center">
        <Col xs={1}>
          <Button variant="link" onClick={handlePrev}>
            <img src="left.jpg" alt="Previous" style={{ width: '30px' }} />
          </Button>
        </Col>
        <Col xs={10}>
          <Card className="mb-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Card.Img variant="top" src={projects[currentIndex].imageUrl} alt={projects[currentIndex].name} />
            <Card.Body>
              <Card.Title>{projects[currentIndex].name}</Card.Title>
              <Card.Text>{projects[currentIndex].description}</Card.Text>
              <Card.Text>{t('date')}: {projects[currentIndex].date}</Card.Text>
              <Card.Text>{t('color')}: {projects[currentIndex].color}</Card.Text>
              <Button variant="primary" onClick={handleShowReview}>{t('check_review')}</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1}>
          <Button variant="link" onClick={handleNext}>
            <img src="right.jpg" alt="Next" style={{ width: '30px' }} />
          </Button>
        </Col>
      </Row>
      <Button as={Link} to="/explore-colors" variant="primary" size="lg" className="mt-4">{t('apply_your_project')}</Button>
      
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('project_review')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{review}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>{t('close')}</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ViewProjects;




