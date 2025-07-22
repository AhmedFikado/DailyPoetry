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
              <Link to="/">Ajouter</Link>
            </li>
            <li>
              <Link to="/">Modifier</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  );
}

export default Header;
