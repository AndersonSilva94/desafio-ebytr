import connection from 'db/conn';
import { Task, User } from 'utils/interfaces';

const createTask = async (taskObj: Task, user: User) => {
  const { task, status } = taskObj;
  const { _id: userId } = user;
  const db = await connection();
  const newTask = await db.collection('tasks').insertOne({
    task,
    date_created: new Date(),
    status,
    userId,
  });

  console.log(newTask);
  return {
    _id: newTask.insertedId, task, status, userId,
  };
};

export default createTask;
