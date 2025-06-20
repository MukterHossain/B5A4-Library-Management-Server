import { model, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";



const borrowSchema = new Schema<IBorrow>({
    book: {type: String, require: true, trim: true },
    quantity: {type: Number, require: true},
    dueDate: {type: String, require: true }
    
},
{
    timestamps: true,
    versionKey: false
}
)

export const Borrow = model("Borrow", borrowSchema)