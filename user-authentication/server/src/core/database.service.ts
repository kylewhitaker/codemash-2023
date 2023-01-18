import { PrismaClient } from "../../prisma/generated";

const prisma = new PrismaClient();

export const db = prisma;
