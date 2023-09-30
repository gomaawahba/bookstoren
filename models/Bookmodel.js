import mongoose from "mongoose";
//craete Schema
const bookSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        publishyear: {
            type: Number,
            required: true,
        },
    }, {
        timestamps: true
    }

);

///create model
export const Book = mongoose.model("book", bookSchema);