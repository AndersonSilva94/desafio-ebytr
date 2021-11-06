import { findUserByEmail } from '../models/userModel';
import { doubleEmail } from '../utils/messages';

const verifyExistsEmail = async (email: string) => {
  const verify = await findUserByEmail(email);

  if (verify) throw doubleEmail;
};

export default verifyExistsEmail;
