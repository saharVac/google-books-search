const db = require("../models")

// Methods for controller to be implemented in routes
module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query).sort({ date: -1 }).then(books => {
            res.json(books)
        }).catch(err => {
            res.status(422).json(err)
        })
    },
    create: (req, res) => {
        db.Book.create(req.body).then(book => {
            res.json(book)
        }).catch(err => {
            res.status(422).json(err)
        })
    },
    remove: (req, res) => {
        db.Book.findById({ _id: req.params.id }).then(book => {
            book.remove()
        }).then(book => {
            res.json(book)
        }).catch(err => {
            res.status(422).json(err)
        })
    }
}