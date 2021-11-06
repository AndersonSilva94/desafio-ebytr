import { findUserByEmail } from 'models/userModel';
import { incorrectLogin } from 'utils/messages';

const verifyCorrectLogin = async (email, password) => {
  const existsEmail = await findUserByEmail(email);

  if (!existsEmail || existsEmail.password !== password) throw incorrectLogin;

  return existsEmail;
};

export default verifyCorrectLogin;
