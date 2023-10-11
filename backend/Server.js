const express = require("express");
const app = express();
const db = require("./Config/Connect")
const dotenv = require("dotenv");
const authRouter = require("./Routes/AuthRoutes");
const cors = require('cors')
dotenv.config()
db();
app.use(cors())

app.use(express.json());
app.use("/api/auth", authRouter)



app.listen(8080, () => {
  console.log("server is running on the port ", process.env.PORT);
});