import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './ExploreColors.css';

const colorsData = [
  { type: 'Matte', price: 30, company: 'A', ecoFriendly: true, image: 'color1.jpg' },
  { type: 'Glossy', price: 40, company: 'B', ecoFriendly: false, image: 'color2.jpg' },
  { type: 'Satin', price: 35, company: 'C', ecoFriendly: true, image: 'color3.jpg' },
  { type: 'Matte', price: 25, company: 'D', ecoFriendly: true, image: 'color4.jpg' },
  { type: 'Glossy', price: 45, company: 'A', ecoFriendly: false, image: 'color5.jpg' },
  { type: 'Satin', price: 38, company: 'B', ecoFriendly: true, image: 'color6.jpg' },
  { type: 'Matte', price: 32, company: 'C', ecoFriendly: true, image: 'color1.jpg' },
  { type: 'Glossy', price: 42, company: 'D', ecoFriendly: false, image: 'color2.jpg' },
  { type: 'Satin', price: 36, company: 'A', ecoFriendly: true, image: 'color3.jpg' },
  { type: 'Matte', price: 29, company: 'B', ecoFriendly: true, image: 'color4.jpg' },
  { type: 'Glossy', price: 48, company: 'C', ecoFriendly: false, image: 'color5.jpg' },
  { type: 'Satin', price: 34, company: 'D', ecoFriendly: true, image: 'color6.jpg' },
];

function ExploreColors() {
  const [maxPrice, setMaxPrice] = useState(50);
  const [selectedColor, setSelectedColor] = useState('#ff0000'); // 默认颜色为红色
  const [filteredColors, setFilteredColors] = useState(colorsData);
  const [selectedTypes, setSelectedTypes] = useState(['Matte', 'Glossy', 'Satin']); // 默认选择所有类型
  const [selectedCompanies, setSelectedCompanies] = useState(['A', 'B', 'C', 'D']); // 默认选择所有公司
  const [isEcoFriendly, setIsEcoFriendly] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    handleFilterChange();
  }, [selectedTypes, selectedCompanies, isEcoFriendly, maxPrice]);

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    const updatedColors = colorsData.map(color => ({
      ...color,
      price: Math.floor(Math.random() * (50 - 20 + 1)) + 20,
    }));
    setFilteredColors(updatedColors);
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedTypes(checked ? [...selectedTypes, value] : selectedTypes.filter(type => type !== value));
  };

  const handleCompanyChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCompanies(checked ? [...selectedCompanies, value] : selectedCompanies.filter(company => company !== value));
  };

  const handleFilterChange = () => {
    let updatedColors = [...colorsData];

    if (selectedTypes.length > 0) {
      updatedColors = updatedColors.filter(color => selectedTypes.includes(color.type));
    }

    if (selectedCompanies.length > 0) {
      updatedColors = updatedColors.filter(color => selectedCompanies.includes(color.company));
    }

    if (isEcoFriendly) {
      updatedColors = updatedColors.filter(color => color.ecoFriendly === true);
    }

    updatedColors = updatedColors.filter(color => color.price <= maxPrice);

    setFilteredColors(updatedColors);
  };

  const handleAddToCart = () => {
    if (selectedCard !== null) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <Container>
      <Row style={{ backgroundImage: 'url(header_background.jpg)', backgroundSize: 'cover', padding: '20px 0', marginBottom: '20px'}}>
        <Col className="text-center" style={{ color: 'black' }}>
          <h1>{t('explore_colors')}</h1>
          <Form>
            <Form.Group controlId="formPickColor">
              <Form.Label style={{ fontSize: '1.5em' }}>{t('pick_a_color')}</Form.Label>
              <div>
                <input type="color" value={selectedColor} onChange={(e) => handleColorChange({ hex: e.target.value })} style={{ width: '150px', height: '80px' }} />
              </div>
              <div>{t('hex')}: {selectedColor}</div>
            </Form.Group>
            <div className="filters mt-3">
              <Form.Group controlId="formColorType" className="d-inline-block mx-3">
                <Form.Label>{t('type')}</Form.Label>
                {['Matte', 'Glossy', 'Satin'].map(type => (
                  <Form.Check
                    key={type}
                    type="checkbox"
                    label={t(type.toLowerCase())}
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={handleTypeChange}
                    inline
                  />
                ))}
              </Form.Group>
              <Form.Group controlId="formColorCompany" className="d-inline-block mx-3">
                <Form.Label>{t('company')}</Form.Label>
                {['A', 'B', 'C', 'D'].map(company => (
                  <Form.Check
                    key={company}
                    type="checkbox"
                    label={company}
                    value={company}
                    checked={selectedCompanies.includes(company)}
                    onChange={handleCompanyChange}
                    inline
                  />
                ))}
              </Form.Group>
              <Form.Group controlId="formEcoFriendly" className="d-inline-block mx-3">
                <Form.Check type="checkbox" label={t('eco_friendly')} onChange={(e) => setIsEcoFriendly(e.target.checked)} />
              </Form.Group>
              <Form.Group controlId="formColorPrice" className="d-inline-block mx-3">
                <Form.Label>{t('max_price')}</Form.Label>
                <Form.Control type="range" min="20" max="50" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                <Form.Control type="number" value={maxPrice} readOnly />
              </Form.Group>
              <Button variant="primary" onClick={handleFilterChange} className="d-inline-block mx-3">{t('filter')}</Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="color-cards">
        {filteredColors.map((color, index) => (
          <Col md={3} key={index} className="mb-4">
            <div className={`card h-100 ${selectedCard === index ? 'selected' : ''}`} onClick={() => setSelectedCard(index)}>
              <img src={color.image} alt={color.type} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t(color.type.toLowerCase())}</h5>
                <p className="card-text">{t('price')}: ${color.price}</p>
                <p className="card-text">{t('company')}: {color.company}</p>
                <p className="card-text">{color.ecoFriendly ? t('eco_friendly') : t('not_eco_friendly')}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          <Button className="mt-4" variant="primary" onClick={handleAddToCart} disabled={selectedCard === null}>
            {t('add_to_cart')}
          </Button>
        </Col>
      </Row>
      <ToastContainer className="p-3" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{t('notification')}</strong>
          </Toast.Header>
          <Toast.Body>{t('successfully_added_to_cart')}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default ExploreColors;












