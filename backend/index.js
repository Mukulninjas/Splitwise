const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const databaseConfiguration = require('./config/database');
const app = express();
const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.json({ extended: false }));

databaseConfiguration();

app.use('/users', userRoutes);
app.use('/group', groupRoutes);
app.use('/expense', expenseRoutes);

app.get('/a', (req, res) => res.send('<h1>Server is up and running</h1>'));

app.listen(8000, () => console.log('listening on http://localhost on port 8000'));