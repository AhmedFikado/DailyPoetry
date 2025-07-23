import { useEffect, useState } from "react";
import "./PoemDetailPage.css";
import { useParams } from "react-router";

function PoemDetailPage() {
  const { id } = useParams();
  const [poem, setPoem] = useState<PoemWithAuthor>();
  useEffect(() => {
    fetch(`http://localhost:3310/api/poem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPoem(data);
      });
  }, [id]);

  if (!poem) {
    return (
      <main>
        <h1>Oups, il y a un problème</h1>
      </main>
    );
  }
  return (
    <main className="poem-detail-page-main">
      <img src={`http://localhost:3310/${poem.poem_image}`} alt="" />
      <section>
        <h1>{poem.title}</h1>
        <p>{poem.description}</p>
        <p>
          {poem.user_name}
          <br /> {poem.date}
        </p>
      </section>
    </main>
  );
}

export default PoemDetailPage;
