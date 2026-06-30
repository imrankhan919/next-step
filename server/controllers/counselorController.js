import Category from "../models/categoryModel.js"
import Counselor from "../models/counselorModel.js"

const becomeCounselor = async (req, res) => {

    let userId = req.user.id

    const { category, experience } = req.body

    if (!category || !experience) {
        res.status(409)
        throw new Error("Please Fill All Details")
    }

    // Check if category exists
    const categoryExist = await Category.findById(category)

    if (!categoryExist) {
        res.status(404)
        throw new Error("Category Not Found!")
    }


    // Check if experience is more than 2+
    if (experience < 2) {
        res.status(409)
        throw new Error("Experience Must Be 2 or 2+")
    }

    let counselor = await Counselor.create({
        user: userId,
        category,
        experience
    })


    if (!counselor) {
        res.status(409)
        throw new Error("Counselor Not Created!")
    }

    res.status(201).json({
        message: "Counselor Request Raised Wait For Admin Approval",
        counselor: counselor
    })

}






const counselorController = { becomeCounselor }


export default counselorController