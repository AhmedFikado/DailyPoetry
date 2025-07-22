import { useParams } from "react-router";
import "./EditPoemPage.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function EditPoemPage() {
  const [poem, setPoem] = useState<Poem>();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/api/poem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPoem(data);
      });
  }, [id]);

  const handleOnSubmit = () => {
    fetch(`http://localhost:3310/api/poem/${id}`, {
      method: "delete",
    }).then((res) => {
      if (res.ok) {
        toast.success("L'oeuvre a bien été supprimé");
      }
    });
  };
  if (!poem) {
    return (
      <main>
        <h1>Oups, il y a un problème</h1>
      </main>
    );
  }
  return (
    <>
      <main className="edit-poem-page-main">
        <form>
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" defaultValue={poem.title} />
          <label htmlFor="description">Texte</label>
          <textarea
            name="description"
            rows={7}
            defaultValue={poem.description}
          />
          <input
            type="file"
            name="image"
            id="image-poem"
            accept="png, jpg, jpeg"
          />
          <label
            htmlFor="image-poem"
            className="file-label"
            defaultValue={poem.image}
          >
            Choisir une image
          </label>

          <label htmlFor="date">Date</label>
          <input type="text" name="date" defaultValue={poem.date} />
          <button type="submit">Ajouter</button>
        </form>
        <button type="button" onClick={handleOnSubmit}>
          Supprimer
        </button>
      </main>
    </>
  );
}

export default EditPoemPage;
