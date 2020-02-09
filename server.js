const express = require("express");
// common js requires you import things as such - unless you use babble or something

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server started on port", PORT));

// routes!

app.get("/", (req, res) =>
  res.json({ msg: "Welcone to the contact keeper API" })
);

// define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));
