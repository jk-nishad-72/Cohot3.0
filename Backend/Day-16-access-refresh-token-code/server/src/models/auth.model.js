
import { Schema , model } from "mongoose";


const authSchema = new Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"Name should have aleast 3 Characters"],
        maxLength:[30,"Name should not be more than 30 Characters"],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // match:"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", // it will Validate the Email Id
        
    },
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String,
    },

},{
    timestamps:true,
})

const authModel = model("auth",authSchema)

export default authModel;