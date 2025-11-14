import { Component } from 'react';
import '../styles/CounterClass.css';

/**
 * Class Component - CounterClass
 * Компонент на основі класів, який демонструє альтернативний підхід
 * до управління станом та життєвим циклом
 */
export class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
      clickCount: 0,
    };
  }

  componentDidMount() {
    console.log('CounterClass компонент был смонтирован');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count изменился с ${prevState.count} на ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('CounterClass компонент был размонтирован');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + prevState.step,
      clickCount: prevState.clickCount + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - prevState.step,
      clickCount: prevState.clickCount + 1,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
      clickCount: 0,
    });
  };

  handleStepChange = (e) => {
    this.setState({ step: Number(e.target.value) });
  };

  render() {
    const { count, step, clickCount } = this.state;

    return (
      <div className="counter-class-container">
        <h2>📊 Class Component - Counter</h2>
        <div className="counter-display">
          <p className="counter-value">{count}</p>
        </div>

        <div className="stats">
          <p>
            <strong>Кількість кліків:</strong> {clickCount}
          </p>
          <p>
            <strong>Крок:</strong> {step}
          </p>
        </div>

        <div className="step-control">
          <label htmlFor="step-input-class">Крок:</label>
          <input
            id="step-input-class"
            type="number"
            value={step}
            onChange={this.handleStepChange}
            min="1"
            max="100"
          />
        </div>

        <div className="button-group">
          <button className="btn btn-danger" onClick={this.decrement}>
            ➖ Зменшити
          </button>
          <button className="btn btn-warning" onClick={this.reset}>
            🔄 Скинути
          </button>
          <button className="btn btn-success" onClick={this.increment}>
            ➕ Збільшити
          </button>
        </div>

        <p className="info-text">
          Це компонент на основі класів. Він використовує методи життєвого циклу
          (componentDidMount, componentDidUpdate, componentWillUnmount).
        </p>
      </div>
    );
  }
}

