import connection from 'db/conn';

interface Task {
  task: string,
  date: string,
  status: string,
}

interface User {
  _id: string,
}

const createTask = async (taskObj: Task, user: User) => {
  const { task, date, status } = taskObj;
  const { _id: userId } = user;
  const db = await connection();
  const newTask = await db.collection('tasks').insertOne({
    task, date, status, userId,
  });

  return {
    _id: newTask.insertedId, task, date, status, userId,
  };
};

export default createTask;
