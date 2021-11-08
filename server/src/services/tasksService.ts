import verifyTasksField from '../auth/verifyTasksField';
import { createTask } from '../models/tasksModel';
import { Task, User } from '../utils/interfaces';
import { CREATED } from '../utils/successStatus';

const create = async (tasksObj: Task, user: User) => {
  await verifyTasksField(tasksObj);
  const created = await createTask(tasksObj, user);
  return { status: CREATED, message: created };
};

export default create;
