const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const logger = require('./middleware/logger.js');
const members = require('./Members');


// init middileware 
// app.use(logger);


// Handlebars Middleware 
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Body Parser Middleware 
app.use(express.json());
// handle url encoded data 
app.use(express.urlencoded({ extended: false }));

// Homepage route 
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

// Set static folder you can move this above homepage route to rende this instead
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes 
app.use('/api/members', require('./routes/api/members.js'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


