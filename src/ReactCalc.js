import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return setResult('Enter valid numbers');

    let res;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(res);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>🧮 Simple Calculator</h2>
      <input value={num1} onChange={e => setNum1(e.target.value)} placeholder="First number" />
      <select value={operation} onChange={e => setOperation(e.target.value)} style={{ margin: '0 1rem' }}>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input value={num2} onChange={e => setNum2(e.target.value)} placeholder="Second number" />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={calculate}>Calculate</button>
      </div>
      {result !== null && <h3 style={{ marginTop: '1rem' }}>Result: {result}</h3>}
    </div>
  );
};

export default Calculator;
