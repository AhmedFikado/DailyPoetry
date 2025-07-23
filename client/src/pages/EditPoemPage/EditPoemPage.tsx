import { useParams } from "react-router";
import "./EditPoemPage.css";
import { type ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function EditPoemPage() {
  const [poem, setPoem] = useState<Poem>();
  const [file, setFile] = useState<File | undefined>();
  const { id } = useParams();
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 500 * 1024) {
        toast.error("Le fichier ne doit pas dépasser 500 ko");
        e.target.value = "";
        setFile(undefined);
        return;
      }
      setFile(selectedFile);
    }
  };
  useEffect(() => {
    fetch(`http://localhost:3310/api/poem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPoem(data);
      });
  }, [id]);

  const handleOnSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch(`http://localhost:3310/api/poem/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Poème modifié !");
        fetch(`http://localhost:3310/api/poem/${id}`, {})
          .then((res) => res.json())
          .then((data) => {
            setPoem(data);
          });
      });
  };

  const handleOnSubmitDelete = () => {
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
        <form onSubmit={handleOnSubmitEdit}>
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
            onChange={handleFile}
          />
          <label
            htmlFor="image-poem"
            className="file-label"
            defaultValue={poem.image}
          >
            Choisir une image
          </label>

          {file && (
            <section>
              Détails fichier :
              <ul>
                <li>Nom: {file.name}</li>
                <li>Type: {file.type}</li>
                <li>Taille: {file.size} bytes</li>
              </ul>
            </section>
          )}

          <label htmlFor="date">Date</label>
          <input type="text" name="date" defaultValue={poem.date} />
          <button type="submit">Modifier</button>
        </form>
        <button type="button" onClick={handleOnSubmitDelete}>
          Supprimer
        </button>
      </main>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default EditPoemPage;
