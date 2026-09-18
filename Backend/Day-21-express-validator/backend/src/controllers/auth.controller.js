import userModel from "../models/user   .model.js";




export const registerUserController = async (req , res) => {

    const {email  , phone , password} = req.body;

    // console.log(email , phone , password);

    
    let errors = [];

    if(!email){

        errors.push({
            field:"email",
            message:"Email is required",
        })
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (email &&  !emailRegex.test(email)){
         
        errors.push({
            field:"email",
            message:"Invalid email"
        })
    }

    if(!phone){
        errors.push({
            field:"phone",
            message:"phone is required",
        })
    }

    let phoneRegex = /^[0-9]{10}$/;

    if(phone && !phoneRegex.test(phone)){

        errors.push({
            field:"phone",
            message:"Invalid phone number",
        })
    }

    if(!password){
        errors.push({
            field:"password",
            message:"password is required",
        })
    }

    if(password.trim().length === 6){
        errors.push({
            field:"password",
            message:"Password should be at leat 6 character long."
        })
    }

    if(errors.length > 0){
      return  res.status(400).json({
            message:"Invalid request",
            errors,
        })
    }

    const user = await userModel.create({
        email:email,
        phone:phone,
        password:password 
    })



    res.status(201).json({
            message:"Registration succesfull",
            user:{
                email:user.email,
                phone:user.phone,
                id:user._id,
            }
    })





}