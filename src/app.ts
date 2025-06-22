import express, { Application, Request, Response } from "express";
import { booksRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";
import { ErrorHandler } from "./app/error/error";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/books", booksRoutes);
app.use("/api/borrow", borrowRoutes);
app.use(ErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Libray Management App");
});

export default app;
