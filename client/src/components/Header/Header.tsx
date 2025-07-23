import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src="/logo_transparent.webp" alt="logo" />
          <span>Daily Poetry</span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Poèmes</Link>
            </li>
            <li>
              <Link to="/add-poem">Ajouter</Link>
            </li>
          </ul>
        </nav>
        <Link to="/login">
          <img src="/connexion.png" alt="logo connexion" id="user-icon" />
        </Link>
      </div>
      <hr />
    </header>
  );
}

export default Header;
