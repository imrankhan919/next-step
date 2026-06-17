import express from "express"
import dotenv from "dotenv"
dotenv.config()
import colors from "colors"

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        message: "WELCOME TO NEXT STEP API 1.0"
    })
})


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black)
})