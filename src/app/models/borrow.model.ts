import { model, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      require: true,
      min: [1, "At least one book must be borrowed"],
      validate: {
        validator: Number.isInteger,
        message: "Quantity must be an integer",
      },
    },
    dueDate: {
      type: Date,
      require: [true, "DueDate is required "],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

borrowSchema.pre("save", async function (next) {
  console.log("Borrowing in progress...")
  if(this.quantity <=0){
    throw new Error("Quantity must be greater than 0")
  }
  next()
})

borrowSchema.post("save", function(doc){
  console.log(`Borrow saved for id: ${doc.book}`)
})

export const Borrow = model("Borrow", borrowSchema);
