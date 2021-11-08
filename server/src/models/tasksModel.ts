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
  const getAll = await db.collection('tasks').find({ userId }).toArray();
  return getAll;
};
