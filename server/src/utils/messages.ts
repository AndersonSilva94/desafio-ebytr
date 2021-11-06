import { DOUBLE_EMAIL, INVALID_FIELDS } from './errorMessages';
import { BAD_REQUEST, CONFLICT } from './errorStatus';

export const invalidFields = { status: BAD_REQUEST, message: INVALID_FIELDS };
export const doubleEmail = { status: CONFLICT, message: DOUBLE_EMAIL };
