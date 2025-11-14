import { useState } from 'react';
import '../styles/Counter.css';

/**
 * Stateful Component - Counter
 * Керує своїм станом за допомогою хука useState
 * Відповідальний за логіку видалення та інкрементування лічильника
 */
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>📊 Stateful Component - Counter</h2>
      <div className="counter-display">
        <p className="counter-value">{count}</p>
      </div>

      <div className="step-control">
        <label htmlFor="step-input">Крок:</label>
        <input
          id="step-input"
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
          max="100"
        />
      </div>

      <div className="button-group">
        <button className="btn btn-danger" onClick={decrement}>
          ➖ Зменшити
        </button>
        <button className="btn btn-warning" onClick={reset}>
          🔄 Скинути
        </button>
        <button className="btn btn-success" onClick={increment}>
          ➕ Збільшити
        </button>
      </div>

      <p className="info-text">
        Це компонент зі станом. Він керує своїм станом за допомогою useState.
      </p>
    </div>
  );
};

