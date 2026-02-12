import express from 'express';
const app = express();
const PORT = 3001;

// Array to store agitppointments
const appointments = [];


app.use(express.urlencoded({ extended: true }));

// Serve static files 
app.use(express.static('Hello world'));

app.use(express.static(import.meta.dirname));

// Serve HTML form at root
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/index.html`);
});


// admin route ('/')
app.get('/admin', (req, res) => {
    res.send(appointments);
});



// POST route to handle form submissions
app.post('/submit', (req, res) => {


    // Create a JSON object to store the appointment data
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,  
        timestamp: new Date()
    };

    // Add appointment object to appointments array
    appointments.push(appointment);

    // Send confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
