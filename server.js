const express = require("express");
// common js requires you import things as such - unless you use babble or something
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server started on port", PORT));

// connect database
connectDB();

// init Middleware - included in express
app.use(express.json({ extended: false }));

// routes!

app.get("/", (req, res) =>
  res.json({ msg: "Welcone to the contact keeper API" })
);

// define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));
