import { useEffect, useState } from "react";
import PoemCard from "../../components/PoemCard/PoemCard";
import "./UserPoemsPage.css";
import { useParams } from "react-router";

function UserPoemsPage() {
  const [poems, setPoems] = useState<PoemWithAuthor[]>([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/api/poet/${id}/poems`)
      .then((res) => res.json())
      .then((data) => setPoems(data));
  }, [id]);

  if (!poems) {
    return (
      <main>
        <h1>Oups, il y a un problème</h1>
      </main>
    );
  }
  return (
    <main className="display-poems-page-main">
      {poems.map((poem) => (
        <PoemCard
          key={poem.poem_id}
          linkTo={`/user/edit/poem/${poem.poem_id}`}
          title={poem.title}
          image={poem.poem_image}
          name={poem.user_name}
        />
      ))}
    </main>
  );
}

export default UserPoemsPage;
