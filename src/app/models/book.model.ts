import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, 
      require: [true, "Title is required"], 
      trim: true },
    author: { type: String, require: true, trim: true },
    genre: {
      type: String,
      require: true,
      trim: true,
      uppercase: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      default: "NON_FICTION",
    },
    isbn: { type: String, require: true, unique: true, trim: true },
    description: { type: String, trim: true },
    copies: {
      type: Number,
      require: true,
      min: [0, "Copies must be a positive number"],
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} 12",
      },
    },
    available: {
      type: Boolean,
      default: true,
      require: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Book = model("Book", bookSchema);
