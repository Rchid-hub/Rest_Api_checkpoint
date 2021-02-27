const express = require("express");
const router = express.Router();
const User = require("../models/User");

//get one single user

router.get("/:userId", async (req, res) => {
  try {
    const pendingUser = await User.findById(req.params.userId);
    res.json(pendingUser);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// GET :  RETURN ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users.toString());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST :  ADD A NEW USER TO THE DATABASE

router.post("/", async (req, res) => {
  const newUser = User({
    name: req.body.name,
    age: req.body.age,
    phone: req.body.phone,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT : EDIT A USER BY ID

router.put("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      { name: req.body.name, 
        age: req.body.age, 
        phone: req.body.phone }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

// DELETE : REMOVE A USER BY ID

router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.userId });
    res.json(removedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
