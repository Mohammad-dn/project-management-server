import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getusers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany({});

    res.json(users);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retriving users   ${error.message}` });
  }
};
