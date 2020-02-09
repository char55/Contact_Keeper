const express = require("express");

const router = express.Router();

// @route           POST api/users
// @description     register a user
// access           public
router.post("/", (req, res) => {
  res.send("Registers user");
});

module.exports = router;
