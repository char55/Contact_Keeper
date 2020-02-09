const express = require("express");

const router = express.Router();

// @route           GET api/contacts
// @description     gets all contacts
// access           private
router.get("/", (req, res) => {
  res.send("Get all contacts for a log'd-in user");
});

// @route           POST api/contacts
// @description     Add a new contact
// access           private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route           PUT api/contacts
// @description     update a contact
// access           private
router.put("/:id", (req, res) => {
  res.send("Get logged in user");
});

// @route           DELETE api/contacts
// @description     delete contact
// access           private
router.delete("/:id", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
