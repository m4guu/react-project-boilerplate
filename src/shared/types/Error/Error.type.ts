import { HttpStatusCode } from 'axios';

import { ErrorID } from '../../enums';

export type Error = {
  message: string;
  code: HttpStatusCode;
  id: ErrorID;
};
