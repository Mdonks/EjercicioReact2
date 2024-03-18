import React, { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [solucion1, setSolucion1] = useState(null);
  const [solucion2, setSolucion2] = useState(null);

  const calcularFormulaCuadratica = () => {
    const discriminante = b * b - 4 * a * c;
    if (discriminante < 0) {
      setSolucion1('No hay soluciones reales');
      setSolucion2(null);
    } else {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      setSolucion1(x1);
      setSolucion2(x2);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calculadora de Fórmula Cuadrática</h2>
      <div>
        <label>
          Valor de a:
          <input
            type="number"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Valor de b:
          <input
            type="number"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Valor de c:
          <input
            type="number"
            value={c}
            onChange={(e) => setC(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calcularFormulaCuadratica}>Calcular</button>
      <div>
        <h3>Resultados:</h3>
        {solucion1 !== null && (
          <p>
            x1 = {solucion1}
          </p>
        )}
        {solucion2 !== null && (
          <p>
            x2 = {solucion2}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
