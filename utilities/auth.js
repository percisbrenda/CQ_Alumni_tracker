const bcrypt=require('bcryptjs');
const { RSA_NO_PADDING } = require('constants');
const User=require('../models/userModel');

const userRegister=async(userDetails, role, res)=>{

try {
    
    //validate email
let emailNotTaken=await validateEmail(userDetails.email);
if(!emailNotTaken){
    return res.status(400).json({
        message:"Invalid email"
    })
}


//hash user password before saving to db

    const password = await bcrypt.hash(userDetails.password, 8);

    //create a new user
    const newUser=new User({
        ...userDetails,
        password,
        role
    });
    await newUser.save();
    return res.status(201).json({
        message:"New user created"
    })

} catch (error) {
    
    return res.status(500).json({
        message:"Unable to register, try again later"
    })
}

}
const validateEmail=async email=>{
    let user= await User.findOne({email});
    return user ? false:true;
}

module.exports={userRegister};