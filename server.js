const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); 

let books = []; 

app.get("/", (req, res) => {
    res.send("Library API is running!");
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.json({ message: "Book added!" });
});

app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.book_id == req.params.id);
    res.json(book || { error: "Book not found" });
});

app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.book_id != req.params.id);
    res.json({ message: "Book deleted!" });
});

app.listen(port, () => {
    console.log(`Library API running at http://localhost:${port}`);
});