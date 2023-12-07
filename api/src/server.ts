require('dotenv').config()
import path from "path";
import express from "express";
import mongoose from "mongoose"
import connectDB from "./config/connectDB";


const app = express();
const PORT = process.env.PORT || 6600;
const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === "production"){
    const clinetDist: string = path.join(__dirname, "..", "..", "client", "dist")
    app.use("/", express.static(clinetDist))
}

if (NODE_ENV === "development"){
    app.get("/", (req, res) => {
        res.send("Hello, TypeScript in Development mode")
    })
}

connectDB()
console.log(NODE_ENV)
mongoose.connection.once("open", () => {
    console.log('Connected to MongoDB')
    app.listen(PORT , () => console.log(`Server is runing at port: ${PORT}`))
})

mongoose.connection.on("error", error => {
    console.log(error)
})
