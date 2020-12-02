const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    // work_status: {
    //     type: String
    // },
    // Cohort: {
    //     type: Number
    // },
    // linked: {
    //     type: String
    // },
    role: {
        type: String,
        default:"alumni",
        enum:["admin", "facilitator", "partner", "alumni"]
    },
    
}, 
{
    timestamps:true
});
// module.exports('user', userSchema);
const User = mongoose.model('User', userSchema)

module.exports = User