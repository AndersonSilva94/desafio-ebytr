import Joi from 'joi';

interface ObjProps {
  email: string,
  password: string,
}

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
});

const validateLogin = (obj: ObjProps) => schema.validate(obj);

export default validateLogin;
