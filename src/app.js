require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const verifyToken = require("./middleware/jwtAuth");

const newsapi = require("./Helpers/NewsorgHelper");

const app = express();
const PORT = process.env.APP_PORT;

// Express route to fetch top 10 documents
app.post("/news-aggregator/v1/headlines", verifyToken, async (req, res) => {
  try {
    //let data = await modelhelper.fetchrecords();
    let data = await newsapi.fetchheadlines();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//POST /register: Register a new user
app.post("/news-aggregator/v1/register", async (req, res) => {
  try {
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    await user.save();
    return res.status(200).json({ message: " user registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// POST /login: Log in a user.
app.post("/news-aggregator/v1/login", async (req, res) => {
  try {
    let emailPassed = req.body.email;
    let passwordPassed = req.body.password;
    const u = await User.findOne({ email: emailPassed });
    var passwordinvalid = bcrypt.compareSync(passwordPassed, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid Passowrd!" });
    }
    var token = jwt.sign(
      {
        id: user.id,
      },
      "THIS IS SECRET",
      {
        expiresIn: 86400,
      }
    );
    return res.status(200).json({
      user: {
        id: user.id,
      },
      message: "Login successful",
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// GET /preferences: Retrieve the news preferences for the logged-in user.
app.get("/news-aggregator/v1/preferences", verifyToken, async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// PUT /preferences: Update the news preferences for the logged-in user.
app.put("/news-aggregator/v1/preferences", verifyToken, async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// GET /news: Fetch news articles based on the logged-in user's preferences.
app.get("/news-aggregator/v1/news", verifyToken, async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
