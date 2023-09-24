import { HttpStatusCode } from 'axios';

import { ErrorID } from '../../enums';

type Error = {
  message: string;
  code: HttpStatusCode;
  id: ErrorID;
};

export default Error;
