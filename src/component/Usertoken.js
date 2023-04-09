import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Usertoken() {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/gettoken/${name}`);

      const token = await response.text();
      console.log("text()",response.text())
      localStorage.setItem('token', token);
      setToken(token);
      console.log(token)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Get Token
        </Button>
      </Form>

      <div>{token}</div>
    </div>
  );
}

export default Usertoken;
