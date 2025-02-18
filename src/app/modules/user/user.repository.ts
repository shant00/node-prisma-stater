import { pool } from "../../../config/database";
import { IUser } from "./user.interface";

const createUser = async (user: IUser) => {
  const { rows } = await pool.query(
    'INSERT INTO users (email, password, name, gender) VALUES ($1, $2, $3, $4) RETURNING *',
    [user.email, user.password, user.name, user.gender]
  );
  return rows[0];
};


export const userRepository = {
  createUser
}