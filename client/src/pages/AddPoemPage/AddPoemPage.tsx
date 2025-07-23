import { type ChangeEvent, useState } from "react";
import "./AddPoemPage.css";
import { ToastContainer, toast } from "react-toastify";

function AddPoemPage() {
  const [file, setFile] = useState<File | undefined>();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("http://localhost:3310/api/poem", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        toast.success("Le poème a bien été ajouté.");
      } else {
        toast.error("Votre poème n'a pas été ajouté");
      }
    });
  };

  return (
    <>
      <main className="add-poem-page-main">
        <h1>Ajout de poème</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" placeholder="ex: Demain dès l'aube" />
          <label htmlFor="description">Texte</label>
          <textarea
            name="description"
            rows={7}
            placeholder="ex: Demain dès l'aube à l'heure où blanchit la campagne..."
          />
          <input
            type="file"
            name="image"
            id="image-poem"
            accept="png, jpg, jpeg"
            onChange={handleFile}
          />
          <label htmlFor="image-poem" className="file-label">
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
          <input type="text" name="date" placeholder="ex: 2024-12-31" />
          <button type="submit">Ajouter</button>
        </form>
      </main>
      <ToastContainer />
    </>
  );
}
export default AddPoemPage;
