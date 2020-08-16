const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const application = express();

//Database init
connectDB();

//init parsers
application.use(express.json({extended: false}));
application.use(cors());

//Routes
application.use('/api/users', require('./routes/users'));
application.use('/api/auth', require('./routes/auth'));
application.use('/api/transactions', require('./routes/transactions'));

const PORT = process.env.PORT || 5000;

application.listen(PORT, () => { console.log(`Server started on port ${PORT}`); })