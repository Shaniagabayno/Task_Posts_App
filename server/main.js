const express = require('express');
const userRouter = require('./router/userRouter')
const cors = require('cors')

require("./configs/database")
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/users", userRouter)

app.listen(2000);

console.log(("Onload..."));
