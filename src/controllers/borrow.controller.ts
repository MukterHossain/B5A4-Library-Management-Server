
import  express, { Request, Response }  from "express"
import { Borrow } from "../models/borrow.model";




export const borrowRoutes = express.Router();

borrowRoutes.post("/create-borrow", async(req:Request, res:Response) =>{
    const body = req.body;
    const borrow = await Borrow.create(body)
    res.status(201).json({
        success: true,
        message: "Borrow  created successfully",
        data:borrow
    })
})
borrowRoutes.get("/", async(req:Request, res:Response) =>{
    const borrow = await Borrow.find()
    res.status(201).json({
        success: true,
        message: "All borrow book retrive successfully",
        data:borrow
    })
})
borrowRoutes.get("/:borrowId", async(req:Request, res:Response) =>{
    const borrowId = req.params.bookId;
    const borrow = await Borrow.findById(borrowId)
    res.status(201).json({
        success: true,
        message: "A borrow book retrive with bookId successfully",
        data:borrow
    })
})
