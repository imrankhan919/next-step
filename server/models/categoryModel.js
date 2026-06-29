import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please Enter Category Title!"]
    }

})


const Category = mongoose.model("Category", categorySchema)

export default Category