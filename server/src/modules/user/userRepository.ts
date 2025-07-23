import databaseClient, { type Rows } from "../../../database/client";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(`
        SELECT * 
        FROM user`);
    return rows;
  }
  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT * 
      FROM user
      WHERE email = ?`,
      [email],
    );
    return rows[0];
  }
}

export default new UserRepository();
