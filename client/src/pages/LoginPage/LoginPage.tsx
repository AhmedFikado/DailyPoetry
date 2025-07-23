import "./LoginPage.css";
import { ToastContainer, toast } from "react-toastify";

function LoginPage() {
  const handleSubmit = (data: FormData) => {
    const values = Object.fromEntries(data);

    fetch("http://localhost:3310/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (!response.ok) {
        toast.error("Echec de connexion");
        throw new Error("Connexion failed");
      }
      toast.success("Connexion réussie");
      return response.json();
    });
  };
  return (
    <>
      <main className="login-page-main">
        <form action={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="ex: jeanDupont@gmail.com"
            name="email"
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Votre mot de passe"
          />
          <button type="submit">Se connecter</button>
        </form>
      </main>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default LoginPage;
