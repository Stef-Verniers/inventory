require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const jwt = require("jsonwebtoken");

app.use(cors({
  origin: 'http://localhost:5173', // Update this with the actual origin of your frontend
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post("/login", (req, res) => {
  const EMAIL = "stef.verniers@hosted-power.com";
  const PASSWORD = "1103";
  const { email, password } = req.body;
  if (email === EMAIL && password === PASSWORD) {
    const user = {
      id: 1,
      name: "stef verniers",
      email: "stef.verniers@hosted-power.com",
    };
    console.log(process.env.JWT_KEY)
    const token = jwt.sign(user, process.env.JWT_KEY);
    res.json({
      token,
      user,
      message: "login successful"
    });
  } else {
    res.status(403);
    res.json({
      message: "wrong login information",
    });
  }
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
