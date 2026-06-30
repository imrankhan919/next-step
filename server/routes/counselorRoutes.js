import express from "express"
import protect from "../middleware/authMiddleware.js"
import counselorController from "../controllers/counselorController.js"


const router = express.Router()

router.post("/", protect.forUser, counselorController.becomeCounselor)


export default router