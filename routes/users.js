const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post('/',
    [
        check('name', 'Please enter a name').not().isEmpty(),
        check('email', 'Please enter an email').not().isEmpty(),
        check('password', 'Please enter a password with 7 or more characters').isLength({min: 7})    
    ], 
    async (req, res) => {
        const errs = validationResult(req);
        if(!errs.isEmpty()) {
            return res.status(400).json({errs: errs.array()});
        }

        const { name, email, password } = req.body;
        console.log(name);
        console.log(email);
        console.log(password);
        try {
            let user = await User.findOne({ email });
            if(user) {
                res.status(400).json( {message : "User already exsists"} );
            }
            user = new User({ name, email, password });
            const salt = bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            const result = await user.save();
            console.log(`Regestered user`);
            const payLoad = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payLoad,
                config.get('jwtSeceret'),
                {
                    expiresIn: 360000
                },
                (err, token) => {
                    if(err) throw err;
                    res.json({ token });
                }
            );
        } catch(err) {
            console.log(err.message);
            res.status(500).json({ msg: "Server error" });
        }
    });

module.exports = router;