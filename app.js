// const express = require("express");

// const books = require("./books.json")

// const app = express();

// app.use(express.json());



// app.get("/", (req,res)=>{
//     res.send({ books })
// })

// app.post("/", (req,res)=>{
//     const newbook = [...books, req.body];

//     res.send(newbook);
// })

// app.patch("/:author", (req,res)=>{
//     const newbook = books.map((book) =>{
//         if(req.params.author===book.author){
//         return req.body
//         }
//         return books
//     });
//     res.send(newbook);
// })


// app.delete("/:author", (req,res)=>{
//     const newUsers = books.filter((user) => user.author !== req.params.author);

//     res.send(newUsers)
// })



// app.listen(2346, function (){
// console.log("Listening on 2346")
// })






const express = require("express");
const books = require("./books.json");

const app = express();

app.get("/",(req,res) => {
    res.send({books});
    console.log(books);
})

app.post("/books",(req,res) => {
    const newBooks = [...books,req.body];
    //console.log(newBooks);
    res.send(newBooks)
})

app.get("/books/:author",(req,res) => {
    const newbook = books.filter((user) => req.params.author == user.author);
    res.send(newbook);
})

app.patch("/books/:author",(req,res) => {
    const newbook = books.map((user) => req.params.author == user.author);
    res.send(newbook);
})


app.delete("/books/:author",(req,res) => {
    const newUsers = books.filter((user) => user.author == req.params.author);

    res.send(newUsers);
})

app.listen(2348,function(){
    console.log("listening on port 2345");
})