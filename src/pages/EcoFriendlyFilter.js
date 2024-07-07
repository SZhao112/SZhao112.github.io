import React from 'react';
import { Container, Form } from 'react-bootstrap';

function EcoFriendlyFilter({ filter, handleFilterChange }) {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formEcoFriendly">
          <Form.Check
            type="checkbox"
            label="Eco-Friendly"
            name="ecoFriendly"
            checked={filter.ecoFriendly}
            onChange={handleFilterChange}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default EcoFriendlyFilter;
