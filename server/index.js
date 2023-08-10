const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const upload = require("express-fileupload");
const api = require("./server/routes/api");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: ["https://knowledge-journey-bookshop.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  }),
);

mongoose.connect(
  "mongodb+srv://Suha:988456321_cse@cluster0.p47c2t1.mongodb.net/bookshop?retryWrites=true&w=majority",
);

app.use(express.json());
app.use(bodyParser.json());
app.use(upload());
app.use("/uploads/covers", express.static("uploads/covers"));
app.use("/uploads/authors", express.static("uploads/authors"));
app.use("/", api);
app.listen(PORT, function () {
  console.log(`server is listen on port: ${PORT}`);
});
