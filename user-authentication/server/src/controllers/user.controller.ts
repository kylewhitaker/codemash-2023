import { Request, Response } from "express";
import { buildResponse, db } from "../core";

export async function getUser(req: Request, res: Response) {
  const cognitoId = (req as any).user.sub as string;
  const data = await db.user.findUnique({ where: { cognitoId } });
  res.json(buildResponse(req, data));
}

export async function createUser(req: Request, res: Response) {
  const cognitoId = (req as any).user.sub as string;
  const data = await db.user.create({
    data: {
      cognitoId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
  });
  res.json(buildResponse(req, data));
}
