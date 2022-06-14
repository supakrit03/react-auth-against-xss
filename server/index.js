const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

const db = [
  {
    email: "user@mail.com",
    password: "foobar",
  },
];

let refreshTokenStore = "";

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = db.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    const accessToken = jwt.sign(
      {
        email: user.email,
      },
      "secret"
    );

    const refreshToken = jwt.sign(
      {
        email: user.email,
      },
      "secret-refresh"
    );

    res.cookie("refresh_token", refreshToken, { secure: true, httpOnly: true });

    return res.status(200).json({
      access_token: accessToken,
    });
  }

  return res.status(401).json({
    status: 401,
    message: "email or password invaild.",
  });
});

app.post("/refresh", (req, res) => {
  const { refresh_token } = req.cookies;

  if (!refresh_token)
    return res.status(401).json({
      status: 401,
      message: "refresh token not found",
    });

  const decoded = jwt.verify(refresh_token, "secret-refresh");

  if (!decoded)
    return res.status(401).json({
      status: 401,
      message: "token expired",
    });

  const accessToken = jwt.sign(
    {
      email: decoded.email,
    },
    "secret"
  );

  return res.status(200).json({
    access_token: accessToken,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
