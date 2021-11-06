import Joi from 'joi';
import { invalidFields } from '../utils/messages';

const verifyFieldsUser = (name: string, email: string, password: string) => {
  const schema = Joi.object({
    name: Joi.string().min(3).not().empty()
      .required(),
    email: Joi.string().not().empty().email()
      .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

  const { error } = schema.validate({ name, email, password });

  if (error) throw invalidFields;
};

export default verifyFieldsUser;
