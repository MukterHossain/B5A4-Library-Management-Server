import express, { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.model";

export const booksRoutes = express.Router();

booksRoutes.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const book = await Book.create(body);
      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: book,
      });
    } catch (error) {
      next(error);
    }
  },
);

booksRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await Book.find()
    res.status(201).json({
      success: true,
      message: "Books retrive successfully",
      data: books,
    });
  }  catch (error) {
      next(error)
    }
  }
);

booksRoutes.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      res.status(201).json({
        success: true,
        message: "Book retrieved single successfully",
        data: book,
      });
    } catch (error) {
      next(error);
    }
  },
);

booksRoutes.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
  const body = req.body;
  const book = await Book.findByIdAndUpdate(id, body, { new: true });
  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: book,
  });
  } catch (error) {
    next(error);
  }
});



booksRoutes.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
  await Book.findByIdAndDelete(id);
  res.status(201).json({
    success: true,
    message: "Book deleted successfully",
    data: null,
  });
  } catch (error) {
    next(error);
  }
});
