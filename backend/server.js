const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 9000;

const mockUser = {
  username: "admin",
  password: bcrypt.hashSync("admin", 8),
};

app.use(express.json());

const SECRET_KEY = "mysecretkey";

// Serve React static files
app.use(express.static(path.join(__dirname, "build")));

// API endpoint: Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ message: "Username and password are required." });
  }

  if (username !== mockUser.username) {
    return res.status(404).send({ message: "User not found" });
  }

  const passwordIsValid = bcrypt.compareSync(password, mockUser.password);
  if (!passwordIsValid) {
    return res.status(401).send({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: mockUser.username }, SECRET_KEY, { expiresIn: 86400 });
  res.send({ token, message: "Login successful" });
});

// Fallback route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
