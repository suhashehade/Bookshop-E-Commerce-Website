const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Author = require("../models/Author");
const Category = require("../models/Category");
const Review = require("../models/Review");
const Book = require("../models/Book");
const Order = require("../models/Order");

router.get("/", (req, res) => {
  res.json("hello");
});

router.post("/user", function (req, res) {
  let userData = req.body;
  let user = new User(userData);
  user.save();
  res.end();
});

router.get("/users", function (req, res) {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch(() => {
      res.status(500).send({ error: "Something broke!" });
    });
});

router.get("/user", async function (req, res) {
  let email = req.query.email;
  let password = req.query.password;
  let user = await User.findOne({ email: email, password: password }).exec();
  res.send(user);
});

router.post("/category", function (req, res) {
  let categoryData = req.body;
  let category = new Category(categoryData);
  category.save();
  res.end();
});

router.get("/categories", function (req, res) {
  Category.find({})
    .then((categories) => {
      res.send(categories);
    })
    .catch(() => {
      res.status(500).send({ error: "Something broke!" });
      res.status(501).send({ error: "Something broke!" });
      res.status(502).send({ error: "Something broke!" });
      res.status(503).send({ error: "Something broke!" });
      res.status(504).send({ error: "Something broke!" });
    });
});

router.get("/category", async function (req, res) {
  let name = req.query.name;
  let category = await Category.findOne({ name: name }).exec();
  res.send(category);
});

router.post("/author", function (req, res) {
  let picture = req.files.picture;
  let picture_name = picture.name.split(".")[0] + Date.now() + ".png";
  picture.mv("uploads/authors/" + picture_name, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("file uploaded");
      let authorData = {
        name: req.body.name,
        picture: picture_name,
        email: req.body.email,
        phone: req.body.phone,
      };
      let author = new Author(authorData);
      author.save();
      res.end();
    }
    res.status(500).send({ error: "Something broke!" });
  });
});

router.get("/author", async function (req, res) {
  let name = req.query.name;
  let auhtor = await Author.findOne({ name: name }).exec();
  res.send(auhtor);
});

router.get("/authors", function (req, res) {
  Author.find({})
    .then((authors) => {
      res.send(authors);
    })
    .catch(() => {
      res.status(500).send({ error: "Something broke!" });
    });
});

router.post("/review", function (req, res) {
  let reviewData = req.body;
  let review = new Review(reviewData);
  review.save();
  res.end();
});

router.post("/book", function (req, res) {
  let cover = req.files.cover;
  let coverName = cover.name.split(".")[0] + Date.now() + ".png";
  cover.mv("uploads/covers/" + coverName, async function (err) {
    if (err) {
      res.send(err);
    } else {
      let authorName = req.body.author;
      let categoryName = req.body.category;
      let category = await Category.findOne({ name: categoryName }).exec();
      let author = await Author.findOne({ name: authorName }).exec();
      let book = new Book({
        ...req.body,
        cover: coverName,
        category: category,
        author: author,
        reviews: [],
      });
      book.save();
      res.end();
    }
  });
});

router.get("/books", function (req, res) {
  Book.find({})
    .populate("author category")
    .then((books) => {
      res.send(books);
    })
    .catch((error) => {
      res.send(`Error retrieving data: ${error}`);
    });
});

router.get("/book", async function (req, res) {
  let bookTitle = req.query.title;
  try {
    let book = await Book.find({ title: bookTitle }).populate(
      "author category",
    );
    res.send(book);
  } catch (error) {
    res.send(`Error retrieving data: ${error}`);
  }
});

router.post("/order", function (req, res) {
  let orderDetails = req.body;
  let order = new Order(orderDetails);
  order.save();
  res.end();
});

module.exports = router;
