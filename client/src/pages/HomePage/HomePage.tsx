import { useEffect, useState } from "react";
import PoemCard from "../../components/PoemCard/PoemCard";
import "./HomePage.css";

function HomePage() {
  const [poems, setPoems] = useState<PoemWithAuthor[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/poems")
      .then((res) => res.json())
      .then((data) => setPoems(data));
  }, []);

  if (!poems) {
    return (
      <main>
        <h1>Oups, il y a un problème</h1>
      </main>
    );
  }
  console.log(poems);
  return (
    <main className="home-page-main">
      {poems.map((poem) => (
        <PoemCard
          key={poem.poem_id}
          id={poem.poem_id}
          title={poem.title}
          image={poem.poem_image}
          name={poem.user_name}
        />
      ))}
    </main>
  );
}

export default HomePage;
