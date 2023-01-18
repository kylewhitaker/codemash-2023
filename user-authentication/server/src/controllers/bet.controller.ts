import { Request, Response } from "express";
import { buildResponse, db } from "../core";

export async function getBets(req: Request, res: Response) {
  const cognitoId = (req as any).user.sub as string;
  const data = await db.bet.findMany({
    where: { user: { cognitoId } },
    take: 5,
    orderBy: { id: "desc" },
  });
  res.json(buildResponse(req, data));
}

export async function createBet(req: Request, res: Response) {
  const cognitoId = (req as any).user.sub as string;
  const data = await db.bet.create({
    data: {
      amount: Number(req.body.amount),
      win: req.body.win,
      user: { connect: { cognitoId } },
    },
  });
  res.json(buildResponse(req, data));
}
