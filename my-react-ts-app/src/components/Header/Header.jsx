import './Header.css'

export default function Header() {
    return (
        <header className="header">
          <h1>Fleet Universal Manager</h1>
    
          <nav>
            <ul>
              <li>Sākums</li>
              <li>Sistēma</li>
              <li>Funkcionalitāte</li>
              <li>Dokumentācija</li>
              <li>Kontakti</li>
            </ul>
          </nav>
    
          <div className="header-buttons">
            <button className="dropdown-button">Valoda</button>
            <button className="login-button">Login</button>
          </div>
        </header>
      )
}