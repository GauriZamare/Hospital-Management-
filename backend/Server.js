const express = require("express");
const app = express();
const db = require("./Config/Connect")
const dotenv = require("dotenv");
const authRouter = require("./Routes/AuthRoutes");
const fileRouter = require("./Routes/FileRoutes");
const profileRouter = require("./Routes/ProfileRoutes");
const appoinmentRouter=require("./Routes/AppoinmentRoutes")
const cors = require('cors')
dotenv.config()
db();
app.use(cors())

app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/file", fileRouter)
app.use("/api/profile", profileRouter)
app.use("/api/appoinment", appoinmentRouter)



app.listen(8080, () => {
  console.log("server is running on the port ", process.env.PORT);
});