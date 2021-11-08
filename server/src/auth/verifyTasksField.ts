import Joi from 'joi';
import { invalidFields } from 'utils/messages';

const verifyTasksField = ({ task }) => {
  const schema = Joi.string().not().empty().required();

  const { error } = schema.validate(task);

  if (error) throw invalidFields;
};

export default verifyTasksField;
