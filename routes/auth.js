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

router.post('/',
    [
        check('email', 'Please enter an email').not().isEmpty(),
        check('password', 'Please enter a password').exists()
    ],
    async (req, res) => {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(400).json({ message : error.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if(!user) {
                res.status(400).send('Invalid credentials');
            }
            const correctPassword = await bcrypt.compare(password, user.password);
            if(!correctPassword) {
                res.status(400).send('Incorrect password');
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSeceret'),
                { expiresIn: 3600000 },
                (err, token) => {
                    if(err) throw err;
                    res.status(200).json({ token });
                }
            );
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    }
)

module.exports = router;
