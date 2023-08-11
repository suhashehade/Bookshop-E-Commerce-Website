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

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(path.join(__dirname, "tmp")));
app.use(upload({ useTempFiles: true, tempFileDir: "/tmp" }));
app.use("/", api);
app.listen(PORT, function () {
  console.log(`server is listen on port: ${PORT}`);
});
