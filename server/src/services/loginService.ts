import verifyCorrectLogin from '../auth/verifyCorrectLogin';
import verifyEmptyLogin from '../auth/verifyEmptyLogin';
import generateToken from '../utils/generateToken';
import { STATUS_OK } from '../utils/successStatus';

const login = async (email: string, password: string) => {
  await verifyEmptyLogin(email, password);
  const validateLogin = await verifyCorrectLogin(email, password);
  const token = await generateToken(validateLogin);
  return { status: STATUS_OK, message: { token } };
};

export default login;
