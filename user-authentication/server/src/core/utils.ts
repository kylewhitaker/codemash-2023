import { Request } from 'express';

export const buildResponse = (req: Request, data: any) => ({
  route: req.originalUrl,
  data,
});
