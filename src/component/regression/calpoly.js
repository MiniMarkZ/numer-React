import polynomialRegression from 'ml-regression-polynomial';

export function calculatePolynomial(m, n, x, matrix) {
    // Check if input data contains non-numeric values
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (isNaN(parseFloat(matrix[i][j]))) {
          throw new Error('Input data contains non-numeric values');
        }
      }
    }
  
    const X = [];
    const y = [];
  
    // Populate X and y arrays from the matrix
    for (let i = 0; i < n; i++) {
      const row = matrix[i];
      const xi = parseFloat(row[0]);
      const yi = parseFloat(row[1]);
      X.push(xi);
      y.push(yi);
    }
    console.log("x",X)
    console.log("y",y)
    const degree = m - 1; 
    const regression = new polynomialRegression(X, y, degree);
    const result = regression.predict(x);
  
    return {re_result : result , re_x:x , re_y:y};
  }
  