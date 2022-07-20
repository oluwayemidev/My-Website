const express = require('express');
const app = express();
const port = process.env.PORT || 8180;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'}
    ]

    res.json(customers);
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});