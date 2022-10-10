const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require("multer");
const path = require("path");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log("Connected to the database");
// })

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "social",
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
db.once("open", function (err, resp) {
  console.log("MongoDB Connected successfully.");
});

app.use(
  "/assets",
  express.static(path.join(__dirname, "public/assets"))
);
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post(
  "/api/v1/upload",
  upload.single("file"),
  (req, res) => {
    try {
      return res
        .status(200)
        .json("file uploaded successfully!");
    } catch (err) {
      console.log("file upload fialed", err);
    }
  }
);

app.get("/", (req, res) => {
  res.send("Welcome to homepage!");
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

app.listen(8080, () => {
  console.log(`Server is running on Port: 8080`);
});
