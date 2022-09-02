const express = require('express');
const cors = require('cors');

const appRoutes = require('./routes/app.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());

/* API ENDPOINTS */
app.use('/api', appRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = server;
