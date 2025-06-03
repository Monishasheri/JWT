const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();
dotenv.config();
//JWT generation//
router.post("/generate", (req, res) => {
  const payload = {
    name: Monisha,
    Qualify: B.E / ECE,
  };
  const jwtsecretkey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(payload, jwtsecretkey);
  console.log(token);
});

module.exports = router;
