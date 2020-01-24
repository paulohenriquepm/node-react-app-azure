const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.json('Hello Home Page');
}); 

router.get('/login', (req, res) => {
  res.json('Hello Login Page');
});

module.exports = router;