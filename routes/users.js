const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
// @route           POST api/users
// @description     register a user
// access           public
router.post(
  "/",
  [
    check("name", "Please enter a name")
      .not()
      .isEmpty(),
    check("email", "Please enter email").isEmail(),
    check("password", "Please enter valid password").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    let userP = await User.findOne({ email: email }).exec();
    console.log(userP);

    try {
      // if (user) {
      //   return res.status(400).json({ msg: "User already exist" });
      // }

      // user = new User({
      //   name,
      //   email,
      //   password
      // });

      // const salt = await bcrypt.genSalt(10);

      // user.password = await bcrypt.hash(password, salt);
      // console.log(user);
      // await user.save();

      return res.send("User saved");
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
