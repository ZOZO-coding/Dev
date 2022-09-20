const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db');

// init app && middleware
const app = express();
// parse any json coming in from request, so that we can use inside our post handler
app.use(express.json())

// db connection
let db;

connectToDb((err) => {
    // success
    if (!err) {
        app.listen(3000, () => {
            console.log('listening to port 3000');
        })
        db = getDb();
    }
})

// routes
app.get('/books', (req, res) => {
    // pagination feature:
    // current page, access through query parameters
    const page = req.query.p || 0; // 0 for default page value in case no value
    const booksPerPage = 3;
    // logic: to skip how many books, for example, at page 2, we need to skip page 0 and page 1, the amount of books skipped is 2 pages * 3 per page = 6;


    let books = [];

    db.collection('books')
        .find() // returns a cursor pointing at the collection, we can use toArray or forEach, to fetch a batch (because you cant just get everything, which you have alot), after that batch is exausted, it will fetch another batch
        .sort({author: 1})
        .skip(page * booksPerPage) // skip certain amount of results
        .limit(booksPerPage) // limit the amount of books per page
        // cursor method, async
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params;

    // check if the id is valid
    if (ObjectId.isValid(id)) {
        db.collection('books')
        // the ObjectId is coming from mongoDB so need to require it
        .findOne({_id: ObjectId(id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }

})

app.post('/books', (req, res) => {
    const book = req.body; //  a book object

    db.collection('books')
        .insertOne(book)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document'})
        })
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    // check if the id is valid
    if (ObjectId.isValid(id)) {
        db.collection('books')
        // the ObjectId is coming from mongoDB so need to require it
        .deleteOne({_id: ObjectId(id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not delete the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }
})

app.patch('/books/:id', (req, res) => {
    const updates = req.body;
    const { id } = req.params;

    if (ObjectId.isValid(id)) {
        db.collection('books')
        // the ObjectId is coming from mongoDB so need to require it
        .updateOne({_id: ObjectId(id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not update the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid doc id'})
    }    
})