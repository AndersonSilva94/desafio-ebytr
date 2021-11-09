import { ObjectId } from 'mongodb';
import connection from '../db/conn';
import { Task, User } from '../utils/interfaces';

export const createTask = async (taskObj: Task, user: User) => {
  const { task, status } = taskObj;
  const { _id: userId } = user;
  const created = new Date();
  const db = await connection();
  const newTask = await db.collection('tasks').insertOne({
    task,
    date_created: created,
    status,
    userId,
  });

  return {
    _id: newTask.insertedId, date_created: created, task, status, userId,
  };
};

export const getAllTasks = async (userId: string) => {
  if (!ObjectId.isValid(userId)) return null;

  const db = await connection();
  const getAll = await db.collection('tasks').find(
    { userId: new ObjectId(userId) },
  ).toArray();

  return getAll;
};

const getTaskById = async (taskId: string) => {
  if (!ObjectId.isValid(taskId)) return null;

  const db = await connection();
  const getTask = await db.collection('tasks').findOne(
    { _id: new ObjectId(taskId) },
  );

  return getTask;
};

export const updateTask = async (id: string, taskObj: object) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('tasks').findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { ...taskObj, date_updated: new Date() } },
    { returnOriginal: false },
  );

  const response = await getTaskById(id);
  return response;
};

export const deleteTask = async (id: string) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const deleted = await db.collection('tasks').deleteOne(
    { _id: new ObjectId(id) },
  );

  return deleted;
};
