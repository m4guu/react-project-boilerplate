import { HttpStatusCode } from 'axios';

import { ErrorID } from '../../../../shared/enums';
import { Error } from '../../../../shared/types';

export const undefinedError: Error = {
  message: 'Something goes wrong. Please try later.',
  code: HttpStatusCode.InternalServerError,
  id: ErrorID.InternalServerError,
};
