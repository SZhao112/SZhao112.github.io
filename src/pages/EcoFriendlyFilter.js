import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function EcoFriendlyFilter({ filter, handleFilterChange }) {
  const { t } = useTranslation();

  return (
    <Container>
      <Form.Group controlId="formEcoFriendly">
        <Form.Check
          type="checkbox"
          label={t('eco_friendly')}
          name="ecoFriendly"
          checked={filter.ecoFriendly}
          onChange={handleFilterChange}
        />
      </Form.Group>
    </Container>
  );
}

export default EcoFriendlyFilter;

