// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/user');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// POST /api/users
router.post('/', usersCtrl.create);

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

module.exports = router;