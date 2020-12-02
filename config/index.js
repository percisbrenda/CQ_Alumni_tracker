require('dotenv').config();
module.exports={
    DB: process.env.SYS_DB,
    SECRET: process.env.JWT_SECRET,
    PORT:process.env.PORT
}