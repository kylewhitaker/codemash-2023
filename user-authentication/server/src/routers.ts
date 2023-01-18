import { Router } from "express";
import { createBet, createUser, getBets, getUser } from "./controllers";

const user = Router();
user.get("/", getUser);
user.post("/", createUser);

const bets = Router();
bets.get("/", getBets);
bets.post("/", createBet);

export const ROUTER = {
  user,
  bets,
};
