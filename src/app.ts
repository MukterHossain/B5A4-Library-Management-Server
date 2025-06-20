import express, { Application, Request, Response } from "express"
import { booksRoutes } from "./controllers/book.controller"
import { borrowRoutes } from "./controllers/borrow.controller"


const app: Application = express()
app.use(express.json())


app.use("/api/books", booksRoutes)
app.use("/api/borrow", borrowRoutes)




app.get("/", (req:Request, res:Response)=>{
    res.send("Welcome to Libray Management App")
})


export default app;