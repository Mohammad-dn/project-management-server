import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getprojects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retriving projects ${error.message}` });
  }
};
export const createproject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, startDate, endDate } = req.body;
  console.log("🚀 ~ startDate:", startDate);
  console.log("🚀 ~ description:", description);
  console.log("🚀 ~ name:", name);
  
  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        endDate,
        startDate,
      },
    });
    res.status(201).json(newProject);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error Creating projects ${error?.message}` });
  }
};
