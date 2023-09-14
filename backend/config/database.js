const mongoose = require('mongoose');

const databaseURL = "mongodb://localhost:27017";

const databaseConfiguration = async () => {
    try {
        await mongoose.connect(databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = databaseConfiguration;