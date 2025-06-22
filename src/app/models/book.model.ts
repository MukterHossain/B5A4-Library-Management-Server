import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, require: true, trim: true },
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

bookSchema.methods.deccreaseCopies = async function (quantity: number) {
  if (this.copies < quantity) throw new Error("Not enough copies available");
  this.copies -= quantity;
  if (this.copies === 0) this.available = false;
  await this.save();
};

export interface BookDocument {
  title: string;
  copies: number;
  available: boolean;
  // eslint-disable-next-line no-unused-vars
  deccreaseCopies: (quantity: number) => Promise<void>;
}

export const Book = model("Book", bookSchema);
