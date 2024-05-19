var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require("./routes/index");
var patientRouter = require("./routes/patient");
var doctorRouter = require("./routes/doctor");
var assignRouter = require("./routes/assign");
var departmentRouter = require("./routes/department");
var countRouter = require("./routes/count");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3030",
};

app.use(cors(corsOptions));

app.use("/", indexRouter);
app.use("/patient", patientRouter);
app.use("/doctor", doctorRouter);
app.use("/assign-patient", assignRouter);
app.use("/department", departmentRouter);
app.use("/counts", countRouter);

// Connection URL
const url = "mongodb+srv://Bhargav:rwr5jafuDiwBpWlw@hms.ynxk9u3.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

let https = http.Server(app);

const port = 4000;
const host = "localhost";

https.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});

module.exports = app;
