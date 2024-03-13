// Require necessary modules
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs  = require('express-handlebars');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fonts = require('./fonts.json');



// Configure Handlebars as the view engine
app.engine('.hbs', exphbs({ 
    defaultLayout: 'main', // Specify the default layout file name
    extname: '.hbs' // Specify the file extension for Handlebars templates
  }));
  app.set('view engine', '.hbs');
  
  // Set the directory for views
  app.set('views', path.join(__dirname, 'views'));
  
  // Define a route for the main page
  app.get('/', (req, res) => {
    // Render the main page using the 'index' view
    res.render('index', { title: 'Font Finder' });
  });
  app.get('/preview', (req, res) => {
    const sampleText = req.query.sampleText || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies. Mus mauris vitae ultricies leo integer malesuada nunc. Ullamcorper malesuada proin libero nunc consequat interdum varius.';
    res.render('preview', { fonts, sampleText });
  });
  

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Configure passport for user authentication
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Replace this with your own authentication logic
    if (username === 'admin' && password === 'password') {
      return done(null, { id: 1, username: 'admin' });
    } else {
      return done(null, false, { message: 'Incorrect username or password' });
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // Replace this with your own logic to retrieve user from database
  done(null, { id: 1, username: 'admin' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
