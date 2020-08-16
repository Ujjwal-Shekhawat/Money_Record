const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const auth = require('../middleware/auth');
const User = require('../models/User');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        //console.log(user);
        res.json(user);
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
