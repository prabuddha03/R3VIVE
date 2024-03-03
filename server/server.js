import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about the stack

const port = 8080;

//http get request
app.get("/", (req, res) => {
  res.status(201).json("Home GET request");
});


//api routes
app.use('/api',router)

//start server only when have the valid connection
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`server is connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.log("can not connect to the server");
  }
}).catch(error => {
    console.log("Invalid database connection..!", error);
})
