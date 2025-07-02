import express, { Request, Response} from "express";
import { Borrow } from "../models/borrow.model";
import { Book } from "../models/book.model";

export const borrowRoutes = express.Router();

borrowRoutes.post("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId
    const { quantity, dueDate } = req.body;
    const book = await Book.findById(bookId);
    if(!book || book.available === false || book.copies < quantity){
       res.status(400).json({
        success: false,
        message: "Book are not available or not enough copies"
      })
      return;
    }

    book.copies -=quantity;
    book.available = book.copies > 0;
    await book.save()

    const borrow = await Borrow.create({ book:book._id, quantity, dueDate });
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      
      success: false,
      message: "Borrow failed",
      error: error.message,
    });
  }
});

borrowRoutes.get("/summary", async (req: Request, res: Response) => {
  try {
    const borrow = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $unwind: "$book",
      },
      {
        $project: {
          _id: 0,
          book: {
            title: "$book.title",
            isbn: "$book.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.status(201).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: borrow,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});
