const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const upload = require("express-fileupload");
const fs = require("fs");
const api = require("./server/routes/api");
const cors = require("cors");
const app = express();
const PORT = 4000;

fs.access(
  "public/uploads/authors",
  fs.constants.R_OK | fs.constants.W_OK,
  (err) => {
    if (err) {
      console.error("Folder does not have read and write permissions:", err);
      // You might want to handle this error accordingly
    } else {
      console.log("Folder has read and write permissions");
    }
  },
);
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

app.use("/public/uploads/covers", express.static("public/uploads/covers"));
app.use("/public/uploads/authors", express.static("public/uploads/authors"));
app.use("/", api);
app.listen(PORT, function () {
  console.log(`server is listen on port: ${PORT}`);
});
