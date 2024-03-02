const express = require('express');
const app = express();
const port = 5000;

// Sample data (replace with actual database queries)
const customers = require('./customers.json');

app.get('/api/customers', (req, res) => {
    // Pagination logic (assuming page number starts from 1)
    const page = req.query.page || 1;
    const perPage = 20;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const data = customers.slice(startIndex, endIndex);

    res.json({ data, total: customers.length });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
