import { Server } from "http"
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";



dotenv.config()
let server:Server; 


async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xwmcx9f.mongodb.net/LibraryManagement?retryWrites=true&w=majority&appName=Cluster0`) 
        console.log("Connected to MongoDB Using Mongoose")
        server=app.listen(process.env.PORT, () =>{
            console.log(`App is Listenin on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()


