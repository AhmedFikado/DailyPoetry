import { useEffect, useState } from "react";
import PoemCard from "../../components/PoemCard/PoemCard";
import "./HomePage.css";

function HomePage() {
  const [poems, setPoems] = useState<Poem[]>([]);
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
  return (
    <main className="home-page-main">
      {poems.map((poem) => (
        <PoemCard
          key={poem.id}
          id={poem.id}
          title={poem.title}
          image={poem.image}
        />
      ))}
    </main>
  );
}

export default HomePage;
