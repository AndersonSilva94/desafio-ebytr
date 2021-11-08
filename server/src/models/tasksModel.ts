import connection from '../db/conn';
import { Task, User } from '../utils/interfaces';

const createTask = async (taskObj: Task, user: User) => {
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

export default createTask;
