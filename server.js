const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const application = express();
const path = require('path');

//Database init
connectDB();

//init parsers
application.use(express.json({extended: false}));
application.use(cors());

//Routes
application.use('/api/users', require('./routes/users'));
application.use('/api/auth', require('./routes/auth'));
application.use('/api/transactions', require('./routes/transactions'));

// Serve static assets in prod
if(process.env.NODE_ENV === 'production') {
    application.use(express.static('client/build'));
    application.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

application.listen(PORT, () => { console.log(`Server started on port ${PORT}`); })