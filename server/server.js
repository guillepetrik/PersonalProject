const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express();
require('./Config/mongoose.config');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const { db1, db2 } = require('./Config/mongoose.config');
const pitRoutes = require('./Routes/pit.routes')(app);
const userRoutes = require('./Routes/user.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
