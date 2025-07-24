import { Link } from "react-router";
import "./Header.css";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const { isLogged, setIsLogged, user } = useAuth();
  const handleLogout = () => {
    fetch("http://localhost:3310/api/logout", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setIsLogged(false);
      }
    });
  };

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
            {isLogged && (
              <li>
                <Link to="/add-poem">Ajouter</Link>
              </li>
            )}
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
          <button type="button" onClick={handleLogout}>
            Se déconnecter
          </button>
        )}
      </div>
      <hr />
    </header>
  );
}

export default Header;
