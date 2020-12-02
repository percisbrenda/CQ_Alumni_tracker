const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');


//app varriables
const{ DB, PORT }=require('./config/index')

const app = express();

app.use(express.json());

app.use(cors())

//use router middleware
app.use('/api/users', require('./routes/userRoutes'))

//db connection

    mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})






