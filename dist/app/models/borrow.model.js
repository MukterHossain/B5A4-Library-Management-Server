"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrow = void 0;
const mongoose_1 = require("mongoose");
const borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
    versionKey: false,
});
exports.Borrow = (0, mongoose_1.model)("Borrow", borrowSchema);
