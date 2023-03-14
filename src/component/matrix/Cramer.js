import React, { useState ,useEffect } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import './stylesmatrix.css';

function Matrix_test() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [matrix, setMatrix] = useState([]);

  const RowsChange = (e) => {
    setRows(parseInt(e.target.value));
  };

  const ColumnsChange = (e) => {
    setCols(parseInt(e.target.value));
  };

  useEffect(() => {
    Generate();
  });

  const Generate = () => {
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


  const InputChange = (e, row, col) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = e.target.value;
    setMatrix(newMatrix);
    console.log(e.target.value);
  };
  

  return (
    <Container>
      <Form className='wrapper'>
        <Form.Group controlId="formRows" className='container2'>
          <Form.Label>Rows</Form.Label>
          <Form.Control type="number" value={rows} onChange={RowsChange} />
        </Form.Group>
        <Form.Group controlId="formCols" className='container1'>
          <Form.Label>Columns</Form.Label>
          <Form.Control type="number" value={cols} onChange={ColumnsChange} />
        </Form.Group>
      </Form>
        <Form.Group>
          <Form.Control type="button" value="ปุ่ม" onClick={Generate} />
        </Form.Group>
      
      <Table bordered className=''>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <Form.Control type="number" value={cell} onChange={(e) => InputChange(e, i, j)} />
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
