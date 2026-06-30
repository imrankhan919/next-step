import Career from "../models/careerModel.js"
import Category from "../models/categoryModel.js"
import Counselor from "../models/counselorModel.js"
import User from "../models/userModel.js"

const getUsers = async (req, res) => {

    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error("No Users Found!")
    }

    res.status(201).json(users)

}


const createCategory = async (req, res) => {

    if (!req.body.title) {
        res.status(409)
        throw new Error("Please Enter Category Title")
    }

    const category = await Category.create({ title: req.body.title })

    if (!category) {
        res.status(409)
        throw new Error("Category not created!")
    }

    res.status(201).json(category)

}

const getCategories = async (req, res) => {



    const categories = await Category.find()

    if (!categories) {
        res.status(404)
        throw new Error("Categories not found!")
    }

    res.status(200).json(categories)

}


const createCareer = async (req, res) => {

    const { title, description, requiredQualification, duration, salary } = req.body

    if (!title || !description || !requiredQualification || !duration || !salary) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    const categoryId = req.params.cid

    const career = await Career.create({
        category: categoryId,
        title,
        description,
        requiredQualification,
        duration,
        salary
    })


    if (!career) {
        res.status(409)
        throw new Error("Career Not Created!")
    }

    res.status(201).json(career)


}

const getCareers = async (req, res) => {
    const careers = await Career.find().populate('category')

    if (!careers) {
        res.status(404)
        throw new Error("No Carrers Found")
    }

    res.status(200).json(careers)

}


const getCounselors = async (req, res) => {
    const counselors = await Counselor.find().populate('category').populate('user')

    if (!counselors) {
        res.status(404)
        throw new Error("Counselors Not Found!")
    }


    res.status(200).json(counselors)

}


const updateCounselor = async (req, res) => {
    res.send("updating counselor")
}



const adminController = { getUsers, createCategory, getCategories, createCareer, getCareers, getCounselors, updateCounselor }

export default adminController