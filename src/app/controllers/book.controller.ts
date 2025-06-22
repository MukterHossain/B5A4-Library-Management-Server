import express, { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.model";

export const booksRoutes = express.Router();

booksRoutes.post("/create-book", async (req: Request, res: Response, next: NextFunction) => {
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
    const {
      filter,
      sortBy = "createdAt",
      sort = "asc",
      limit = "10",
    } = req.query;
    const query: Record<string, unknown> = {};
    if (filter) {
      query.genre = filter;
    }
    const bookSorting: { [key: string]: 1 | -1 } = {};
    bookSorting[sortBy as string] = sort === "desc" ? -1 : 1;

    const book = await Book.find(query)
      .sort(bookSorting)
      .limit(parseInt(limit as string));
    res.status(201).json({
      success: true,
      message: "Books retrive successfully",
      data: book,
    });
  }  catch (error) {
      next(error)
    }
  }
);
booksRoutes.get(
  "/:bookId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookId = req.params.bookId;
      const book = await Book.findById(bookId);
      res.status(201).json({
        success: true,
        message: "Book retrieved successfully",
        data: book,
      });
    } catch (error) {
      next(error);
    }
  },
);
booksRoutes.patch("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const updatedBody = req.body;
  const book = await Book.findByIdAndUpdate(bookId, updatedBody, { new: true });
  res.status(201).json({
    success: true,
    message: "Book updated successfully",
    data: book,
  });
});
booksRoutes.delete("/:bookId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.bookId;
  await Book.findByIdAndDelete(bookId);
  res.status(201).json({
    success: true,
    message: "Book deleted successfully",
    data: null,
  });
  } catch (error) {
    next(error);
  }
});
