// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // <== This should come before using `app`

app.use(cors());
app.use(bodyParser.json());

// Dummy login logic (allow any email/password for now)
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);

  if (email && password) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
