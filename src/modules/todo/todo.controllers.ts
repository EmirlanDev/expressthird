import { Request, Response } from "express";

const data: any[] = [];

const getAllTodo = async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      success: true,
      results: data,
    });
  } catch (error) {
    console.error(`Error in getAllTodo: ${error}`);
    res.status(500).send({
      success: false,
      message: `Error in getAllTodo: ${error}`,
    });
  }
};

export default {
  getAllTodo,
};
