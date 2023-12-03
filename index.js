const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
const cors = require("cors");
const connectDb = require("./Config/Database");
const userRouter = require("./Routes/userRoute");
const movieRouter = require("./Routes/movieRoute");
app.use(cors());
app.listen(port, () => {
  console.log("server is on");
});
app.use("/api/v1", userRouter);
app.use('/api/v1' , movieRouter )

connectDb();
