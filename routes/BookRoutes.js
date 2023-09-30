import express from "express";
import { Book } from "../models/Bookmodel.js";
const router = express.Router();



//craete book

router.post("/", async(req, res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishyear) {
            res.status(400).send(
                `send all required failds :title,author,publishyear`
            )
        }
        const newbook = new Book({
            title: req.body.title,
            author: req.body.author,
            publishyear: req.body.publishyear
        });
        const book = await newbook.save();
        res.status(201).json(book)


    } catch (error) {
        console.log(error.massege);
        res.status(500).send({ massege: error.massege })

    }
});

//get all books
router.get("/", async(req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error.massege);
        res.status(500).send({ massege: error.massege });
    }
});
//get all book by id
router.get("/:id", async(req, res) => {
    const bookbyid = await Book.findById(req.params.id);
    if (bookbyid) {
        res.status(200).json(bookbyid)
    } else {
        console.log(`Book Not Found`);
        res.status(404).send(`error Not Found`);
    }
});
//updata book
router.put("/:id", async(req, res) => {
    try {
        // if (!req.body.title ||
        //     !req.body.author ||
        //     !req.body.publishyear) {
        //     res.status(400).send(
        //         `send all required failds :title,author,publishyear`
        //     )
        // }
        const { id } = req.params;
        const updatabook = await Book.findByIdAndUpdate(id, req.body);
        if (!updatabook) {
            res.status(404).json("Book Not Found");
        }
        res.status(200).json("Book Has Updated Successfully");

    } catch (error) {
        console.log(error.massege);
        res.status(500).send({ massege: error.massege })
    }

});

//delete book
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const updatabook = await Book.findByIdAndDelete(id);
        if (!updatabook) {
            res.status(404).json("Book Not Found");
        }
        res.status(200).json("Book Has deleted Successfully");

    } catch (error) {
        console.log(error.massege);
        res.status(500).send({ massege: error.massege })
    }


})

export default router;