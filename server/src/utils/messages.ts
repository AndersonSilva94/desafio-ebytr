import {
  DOUBLE_EMAIL,
  FILLED_FIELDS,
  INCORRECT_LOGIN,
  INVALID_FIELDS,
} from './errorMessages';
import { BAD_REQUEST, CONFLICT, UNAUTHORIZED } from './errorStatus';

export const invalidFields = { status: BAD_REQUEST, message: INVALID_FIELDS };
export const doubleEmail = { status: CONFLICT, message: DOUBLE_EMAIL };
export const filledFields = { status: UNAUTHORIZED, message: FILLED_FIELDS };
export const incorrectLogin = { status: UNAUTHORIZED, message: INCORRECT_LOGIN };
