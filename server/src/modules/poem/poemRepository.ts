import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class PoemRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(`
            SELECT * 
            FROM poem`);
    return rows;
  }
  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT *
        FROM poem 
        WHERE id = ?`,
      [id],
    );
    return rows[0];
  }
  async readByIdWithAuthor(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT p.*, u.name
        FROM poem AS p
        JOIN user AS u 
        ON p.user_id = u.id
        WHERE
        p.id = ?`,
      [id],
    );
    return rows[0];
  }

  async create(body: Poem) {
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO poem
        (title, description, image, date, user_id)
        VALUES (?, ?, ?, ?, 1)`,
      [body.title, body.description, body.image, body.date],
      // ATTENTION, en dure pour le moment niveau user_id, à voir avec l'amélioration
    );
    return result.affectedRows;
  }
  async update(poem: Poem) {
    const [result] = await databaseClient.query<Result>(
      `
        UPDATE poem 
        SET title = ?,
        description = ?,
        image = ?,
        date = ?
        WHERE id = ?`,
      [poem.title, poem.description, poem.image, poem.date, poem.id],
    );
    return result.affectedRows;
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `
        DELETE FROM poem
        WHERE id = ?`,
      [id],
    );
    return result.affectedRows;
  }
}

export default new PoemRepository();
