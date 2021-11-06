const connection = require('../db/conn');

export const createUser = async (name: string, email: string, password: string) => {
  const db = await connection();
  const created = await db.collection('users').insertOne({ name, email, password });
  return { _id: created.insertedId, name, email };
};

export const findUserByEmail = async (email: string) => {
  const db = await connection();
  const findUser = await db.collection('users').findOne({ email });
  if (!findUser) return null;
  return findUser;
};
