import '../styles/UserCard.css';

/**
 * Stateless Component - UserCard
 * Чистий функціональний компонент, який приймає пропси та виводить дані
 * Не керує станом, тільки представляє інформацію користувача
 */
export const UserCard = ({ name, email, age, city, isActive }) => {
  return (
    <div className={`user-card ${isActive ? 'active' : 'inactive'}`}>
      <div className="user-header">
        <div className="user-avatar">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div className="user-info">
          <h3 className="user-name">{name}</h3>
          <p className="user-status">
            {isActive ? '✅ Активний' : '❌ Неактивний'}
          </p>
        </div>
      </div>

      <div className="user-details">
        <div className="detail-item">
          <span className="label">📧 Email:</span>
          <span className="value">{email}</span>
        </div>
        <div className="detail-item">
          <span className="label">🎂 Вік:</span>
          <span className="value">{age} років</span>
        </div>
        <div className="detail-item">
          <span className="label">📍 Місто:</span>
          <span className="value">{city}</span>
        </div>
      </div>

      <p className="component-note">
        Це компонент без стану (Stateless). Він тільки приймає пропси та їх
        відображає.
      </p>
    </div>
  );
};

UserCard.defaultProps = {
  name: 'Невідомий користувач',
  email: 'no-email@example.com',
  age: 0,
  city: 'Не вказано',
  isActive: false,
};

