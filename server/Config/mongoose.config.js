const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const db1 = mongoose.createConnection("mongodb://127.0.0.1/pitangaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db2 = mongoose.createConnection('mongodb://127.0.0.1/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = { db1, db2 };