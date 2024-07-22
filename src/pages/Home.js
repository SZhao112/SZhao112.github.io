import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row style={{ backgroundImage: 'url(home_background.jpg)', backgroundSize: 'cover', padding: '150px 0', opacity: 1, textAlign: 'center' }}>
        <Col>
          <h1 style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '50px', opacity: 1.0 }}>{t('welcome')}</h1>
          <p style={{ fontSize: '1.5em', opacity: 1.0 }}>{t('your_trusted_partner')}</p>
        </Col>
      </Row>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={3} className="text-center mb-4">
            <div className="card h-100">
              <img src="home_color.jpg" alt="Explore Colors" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-1">{t('explore_colors')}</h5>
                <p className="card-text flex-grow-1">{t('intro_colors')}</p>
                <Button as={Link} to="/explore-colors" variant="primary">{t('explore_colors')}</Button>
              </div>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="card h-100">
              <img src="home_project.jpg" alt="View Projects" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-1">{t('view_projects')}</h5>
                <p className="card-text flex-grow-1">{t('intro_projects')}</p>
                <Button as={Link} to="/view-projects" variant="primary">{t('view_projects')}</Button>
              </div>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="card h-100">
              <img src="home_request.jpg" alt="Make Your Request" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-1">{t('make_your_request')}</h5>
                <p className="card-text flex-grow-1">{t('intro_request')}</p>
                <Button as={Link} to="/register" variant="primary">{t('make_your_request')}</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;








