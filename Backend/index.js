const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./database/db");
const { userRouter } = require("./route/user.route");
const { urlRouter } = require("./route/url.route");



const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000 ;


app.use("/user",userRouter);

app.use("/url",urlRouter);


app.listen(PORT, async()=>{
    try {
        await connection;
        console.log(`Server is running on port ${PORT}`);
        console.log("Connected to DataBase")
    } catch (error) {
        console.log(error);
        console.log("Cannot connect to DataBase")
    }
});