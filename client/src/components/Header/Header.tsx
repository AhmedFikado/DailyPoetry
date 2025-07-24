import { Link } from "react-router";
import "./Header.css";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const { isLogged, user } = useAuth();
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
            {isLogged && (
              <li>
                <Link to={`/user/${user?.id}/poems`}>Mes poèmes</Link>
              </li>
            )}
          </ul>
        </nav>
        {!isLogged ? (
          <Link to="/login">
            <img src="/connexion.png" alt="logo connexion" id="user-icon" />
          </Link>
        ) : (
          <span>Se déconnecter</span>
        )}
      </div>
      <hr />
    </header>
  );
}

export default Header;
