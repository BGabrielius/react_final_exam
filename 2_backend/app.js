const express = require("express");
const cors = require("cors");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

const connectMongoDB = require("./config/db.js");
const User = require("./models/User.model.js");

const app = express();
const PORT = process.env.PORT || 5000;

// -- connecting to DB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
// -- POST - new registration
app.post(
  "/api/users",
  asyncHandler(async (req, res) => {
    const { fullname, email, date, time } = req.body;

    // checking if the wanted date is not occupied
    const invalidTime = await User.findOne({ date, time });

    if (invalidTime) {
      res.status(400).send("Invalid user data");
      throw new Error("Invalid user data");
    }

    const user = await User.create({
      fullname,
      email,
      date,
      time,
    });

    if (user) {
      res.status(201).send("User has been registered successfully");
    } else {
      res.status(400).send("Invalid user data");
    }
  })
);

// -- GET - get all users
app.get(
  "/api/users",
  asyncHandler(async (req, res) => {
    const users = await User.find();
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const limit = 10;

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const paginatedUsers = await users.slice(startIndex, endIndex);

      if (paginatedUsers)
        res.status(200).json({
          allUsers: users,
          paginatedUsers: paginatedUsers,
          total: users.length,
        });
      else {
        res.status(400).send("An error has accured");
        throw new Error("An error has accured");
      }
    } else {
      res.status(400).send("An error has accured");
      throw new Error("An error has accured");
    }
  })
);

// -- PUT - update user
app.put(
  "/api/users/:id",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const dataToUpdate = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, dataToUpdate);

    if (!updatedUser) {
      res.status(400).send("Something went wrong, user has not been updated");
      throw new Error("Something went wrong, user has not been updated");
    }
    res.send("User updated successfully");
  })
);

// -- DELETE - delete existing user
app.delete(
  "/api/users/:id",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      res.status(400).send("Something went wrong, user has not been deleted");
      throw new Error("Something went wrong, user has not been deleted");
    }
    res.send("User deleted successfully");
  })
);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
