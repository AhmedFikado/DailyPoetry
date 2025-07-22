import { type ChangeEvent, useState } from "react";
import "./AddPoemPage.css";

function AddPoemPage() {
  const [file, setFile] = useState<File | undefined>();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files[0]);
  };

  const handleSubmit = (formData: FormData) => {
    // const values = Object.fromEntries(data);

    fetch("http://localhost:3310/api/poem", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };
  return (
    <main className="add-poem-page-main">
      <h1>Ajout de poème</h1>
      <form action={handleSubmit}>
        <label htmlFor="title">Titre</label>
        <input type="text" name="title" placeholder="ex: Demain dès l'aube" />
        <label htmlFor="description">Texte</label>
        <textarea
          name="description"
          rows={7}
          placeholder="ex: Demain dès l'aube à l'heure où blanchit la campagne..."
        />
        <label htmlFor="image-poem">Image</label>
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
            file details:
            <ul>
              <li>Name: {file.name}</li>
              <li>Type: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
          </section>
        )}

        <label htmlFor="date">Date</label>
        <input type="text" name="date" placeholder="ex: 2024-12-31" />
        <button type="submit">Ajouter</button>
      </form>
    </main>
  );
}
export default AddPoemPage;
