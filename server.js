const express = require('express');
const app = express();

const PORT = 3000;

// GET PAGE 

// TODO: set up landing page response
// todo: capture user request data : ip, header info,
// todo: create front end assets for page
// todo: create webform for accepting user sign up
app.get('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>Hello from your first Node.js server!</h1>');
});


// POST PAGE
// TODO: set up post page response
// todo: capture user request data : ip, header info,
// todo: create front end assets for page
// todo: create webform for accepting user sign up
app.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// step 1: get at root / home page
    // optional ip logger 
// step 2: respond with html page
    // home page
    // landing page
    // marketing stuff
    // 
// step 3: capture user request data : ip, header info,
// step 4: create front end assets for page
// step 5: create webform for accepting user sign up