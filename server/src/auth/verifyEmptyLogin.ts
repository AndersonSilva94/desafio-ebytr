import Joi from 'joi';
import { filledFields } from '../utils/messages';

const verifyEmptyLogin = (email: string, password: string) => {
  const schema = Joi.object({
    email: Joi.string().not().empty().email()
      .required(),
    password: Joi.string().not().empty().required(),
  });

  const { error } = schema.validate({ email, password });

  if (error) throw filledFields;
};

export default verifyEmptyLogin;
