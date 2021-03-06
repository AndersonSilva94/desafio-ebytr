import { createUser } from '../models/userModel';
import verifyExistsEmail from '../auth/verifyExistsEmail';
import verifyFieldsUser from '../auth/verifyFieldsUser';
import { CREATED } from '../utils/successStatus';

const create = async (name: string, email: string, passaword: string) => {
  await verifyFieldsUser(name, email, passaword);
  await verifyExistsEmail(email);
  const created = await createUser(name, email, passaword);
  return { status: CREATED, message: created };
};

export default create;
