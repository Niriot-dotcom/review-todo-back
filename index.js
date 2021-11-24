import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import TodoRouter from "./routes/routes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(
  express.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

const PORT = process.env.PORT || 5000;
const MONGO_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@firstcluster.bjsso.mongodb.net/myFirstDatabase?retryWrites=true`;
// console.log(MONGO_URL);

app.get("/", (req, res) => {
  res.send(`
        <h1>Running server...</h1>
  `);
});
app.use("/todos", TodoRouter);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => app.listen(PORT),
    () => console.log(`Server running on http://localhost:${PORT}/`)
  )
  .catch((err) => console.log(err));
