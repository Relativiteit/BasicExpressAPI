const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger.js');


// init middileware 
// app.use(logger);

// Body Parser Middleware 
app.use(express.json());
// handle url encoded data 
app.use(express.urlencoded({extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members.js'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


