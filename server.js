const express = require("express");
const app = express();

const mongoDBConnect = require("./config/db");

mongoDBConnect();

app.get('/', (req,res)=>{
    res.send("Hello World!")
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
