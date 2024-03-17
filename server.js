const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 9988;
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
// load env vars
dotenv.config({ path: "./config/config.env" });

// load routes file
const services = require("./routes/services");
const demos = require("./routes/demo");

// db called
connectDB();
// middleware
app.use(express.json());
app.use(cors());

// mount the routes here
app.use("/api/services", services);
app.use("/api/demos", demos);

// error handler called here for show any error
app.use(errorHandler);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// by default home server status..
app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: "the server status running" });
});
app.listen(
  PORT,
  console.log(
    `the server is running in ${process.env.NODE_ENV} port on ${process.env.PORT}`
      .yellow.bold
  )
);
