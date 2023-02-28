import React, { useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

function Matrix_test() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [matrix, setMatrix] = useState([]);

  const handleRowsChange = (e) => {
    setRows(parseInt(e.target.value));
  };

  const handleColsChange = (e) => {
    setCols(parseInt(e.target.value));
  };

  const handleGenerate = () => {
    const newMatrix = [];
    for (let i = 0; i < rows; i++) {
      const newRow = [];
      for (let j = 0; j < cols; j++) {
        newRow.push('');
      }
      newMatrix.push(newRow);
    }
    setMatrix(newMatrix);
  };

  const handleInputChange = (e, row, col) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = e.target.value;
    setMatrix(newMatrix);
    console.log(e.target.value);
  };
  

  return (
    <Container>
      <Form>
        <Form.Group controlId="formRows">
          <Form.Label>Rows</Form.Label>
          <Form.Control type="number" value={rows} onChange={handleRowsChange} />
        </Form.Group>
        <Form.Group controlId="formCols">
          <Form.Label>Columns</Form.Label>
          <Form.Control type="number" value={cols} onChange={handleColsChange} />
        </Form.Group>
        <Form.Group>
          <Form.Control type="button" value="Generate" onClick={handleGenerate} />
        </Form.Group>
      </Form>
      <Table bordered>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <Form.Control type="number" value={cell} onChange={(e) => handleInputChange(e, i, j)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Matrix_test;
