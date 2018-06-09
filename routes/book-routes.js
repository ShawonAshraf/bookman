import express from "express"
import mongoose from "mongoose"
import { ObjectID } from "mongodb"

import Book from "../models/book"

let bookRouter = express.Router()

// GET all books
bookRouter.get("/all", (req, res) => {
    Book.find({})
        .then((books) => {
            res.status(200).send({
                books
            })
        })
        .catch(err => res.status(400).send(err))
})

// get book by mongodb document id
bookRouter.get("/byid/:id", (req, res) => {
    let id = req.params.id

    if (ObjectID.isValid(id)) {
        Book.findOne({ _id: id })
            .then(book => {
                res.status(200).send({
                    book
                })
            })
            .catch(err => res.status(404).send(err))
    } else {
        res.status(400).send({ error: "Invalid ID" })
    }
})

// get book by name
bookRouter.get("/byname/:name", (req, res) => {
    let name = req.params.name

    Book.findOne({ name: name })
        .then(book => {
            res.status(200).send(book)
        })
        .catch(err => res.status(404).send(err))
})

// get book by author
bookRouter.get("/byauthor/:author", (req, res) => {
    let author = req.params.author

    Book.findOne({ author: author })
        .then(book => {
            res.status(200).send(book)
        })
        .catch(err => res.status(404).send(err))
})

// add a book
bookRouter.post("/add", (req, res) => {
    let book = req.body

    let bookEntry = new Book({
        name: book.name,
        author: book.author,
        addedOn: new Date(),
        addedBy: book.addedBy
    })

    bookEntry.save().then(book => res.send(book), err => res.send(err))
})

export default bookRouter