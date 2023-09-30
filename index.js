import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import { connect } from "./configdb/db.js"
import router from "./routes/BookRoutes.js";
import cors from "cors";
const app = express();

//middelwaer for pars request body
app.use(express.json());
//optinal one of cors 
//Allow all origins with default  cors(*)
// app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.use("/books", router)
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))

connect();
//connect