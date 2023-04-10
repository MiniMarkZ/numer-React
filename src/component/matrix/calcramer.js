
export function cramer(matrixA , matrixB ) {
    console.log(matrixA)
    const n = matrixA.length;
    const detA = determinant(matrixA);
    console.log("detA",detA)
    if (detA === 0) {
      return null; 
    }
    
    const results = [];
  
    for (let i = 0; i < n; i++) {
      const matrixAi = matrixA.map((row, j) => row.map((cell, k) => (k === i ? matrixB[j] : cell)));
      const detAi = determinant(matrixAi);
      console.log("detAi",detAi)
      const xi = detAi / detA;
      console.log("xi =",xi)
      results.push(xi);
      console.log("result =",results)
    }
    console.log(results)
    console.log("re_results in cal",results)
    return {re_results : results};
  }

  function determinant(matrix) {
    const n = matrix.length;
  
    if (n === 1) {
      return matrix[0][0];
    }
  
    let det = 0;
  
    for (let i = 0; i < n; i++) {
      const submatrix = matrix.slice(1).map((row) => row.filter((_, j) => j !== i));
      const sign = i % 2 === 0 ? 1 : -1;
      det += sign * matrix[0][i] * determinant(submatrix);
    }
    console.log("det คือ ",det)
    return det;
  }