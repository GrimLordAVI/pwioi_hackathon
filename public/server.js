// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myPortfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint to save contact form data
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({
        name,
        email,
        message,
    });

    try {
        await newContact.save();
        res.status(201).send({ message: 'Contact data saved successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Error saving contact data', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${5500}`);
});