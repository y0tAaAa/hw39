import './App.css';
import { Counter } from './components/Counter';
import { UserCard } from './components/UserCard';
import { CounterClass } from './components/CounterClass';

export default function App() {
  // Дані користувачів для UserCard компонента
  const users = [
    {
      name: 'Іван Петренко',
      email: 'ivan.petrenko@example.com',
      age: 28,
      city: 'Київ',
      isActive: true,
    },
    {
      name: 'Марія Коваленко',
      email: 'maria.kovalenko@example.com',
      age: 32,
      city: 'Львів',
      isActive: true,
    },
    {
      name: 'Сергій Іванов',
      email: 'sergiy.ivanov@example.com',
      age: 25,
      city: 'Харків',
      isActive: false,
    },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>⚛️ React Components Demo</h1>
        <p>Демонстрація Stateful, Stateless та Class компонентів</p>
      </header>

      <main className="app-main">
        <section className="components-section">
          <h2 className="section-title">Stateful Компоненти</h2>
          <div className="components-grid">
            <Counter />
            <CounterClass />
          </div>
        </section>

        <section className="components-section">
          <h2 className="section-title">Stateless Компоненти</h2>
          <div className="components-list">
            {users.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          🚀 Проект створений з використанням React та Vite
          <br />
          Демонстрація различних підходів до створення компонентів
        </p>
      </footer>
    </div>
  );
}
