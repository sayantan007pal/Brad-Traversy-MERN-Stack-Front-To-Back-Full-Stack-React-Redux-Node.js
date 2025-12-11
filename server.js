require("dotenv").config();
const express = require("express");
const app = express();

const mongoDBConnect = require("./config/db");

mongoDBConnect();

//Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req,res)=>{
    res.send("Hello World!")
})

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
