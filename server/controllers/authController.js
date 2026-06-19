import bcrypt from "bcryptjs"
import User from "../models/userModel.js"

const registerUser = async (req, res) => {

    const { name, email, phone, password, qualification, location } = req.body

    // Check if all fields are filled
    if (!name || !email || !phone || !password || !qualification || !location) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    // Check if phone number is 10 digits 
    if (phone.length !== 10) {
        res.status(409)
        throw new Error('Invalid Phone Number')
    }


    // Check if user already exist
    let emailExist = await User.findOne({ email: email })
    let phoneExist = await User.findOne({ phone: phone })

    if (emailExist || phoneExist) {
        res.status(409)
        throw new Error('User Already Exist')
    }

    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);



    const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
        qualification,
        location
    })

    if (!user) {
        res.status(409)
        throw new Error('User not created!')
    }

    res.status(201).json(user)

}

const loginUser = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        res.status(409)
        throw new Error("Please fill all details")
    }

    const user = await User.findOne({ email })

    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json(user)
    } else {
        res.status(401)
        throw new Error("Invalid Credentials")
    }



}



const authController = {
    registerUser,
    loginUser
}


export default authController