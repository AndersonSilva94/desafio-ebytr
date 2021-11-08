import verifyTasksField from '../auth/verifyTasksField';
import { createTask, getAllTasks } from '../models/tasksModel';
import { Task, User } from '../utils/interfaces';
import { CREATED, STATUS_OK } from '../utils/successStatus';

export const create = async (tasksObj: Task, user: User) => {
  await verifyTasksField(tasksObj);
  const created = await createTask(tasksObj, user);
  return { status: CREATED, message: created };
};

export const getAll = async (userId: string) => {
  const arrayTasks = await getAllTasks(userId);
  return { status: STATUS_OK, message: arrayTasks };
};
