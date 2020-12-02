const router=require('express').Router();

//import authfrom utilities
const {userRegister}=require('../utilities/auth');

//alumniRegistration route
router.post('/alumniregister', async(req, res)=>{
    //this imported function will take in three parameters reqbody, role, and res
    await userRegister(req.body, 'alumni', res);

})
//adminRegistration route
router.post('/adminRegistration', async(req, res)=>{
    await userRegister(req.body, 'admin', res);

})
//facilitatorRegistration route
router.post('/facilitatorRegistration', async(req, res)=>{
    await userRegister(req.body, 'facilitator', res);

})
//partnerRegistration route
router.post('/partnerRegistration', async(req, res)=>{
    await userRegister(req.body, 'partner', res);

})



//alumni login route
router.post('/alumnilogin', async(req, res)=>{

})
//admin login route
router.post('/adminlogin', async(req, res)=>{

})
//facilitator login route
router.post('/facilitatorlogin', async(req, res)=>{

})
//patner login route
router.post('/patnerlogin', async(req, res)=>{

})



//main dashboard
router.get('/homedashboard', async(req, res)=>{

})




//alumni protected route
router.post('/alumnidashboard', async(req, res)=>{

})
//admin protected route
router.post('/admindashboard', async(req, res)=>{

})
//facilitator protected route
router.post('/facilitatordashboard', async(req, res)=>{

})
//patner protected route
router.post('/patnerdashboard', async(req, res)=>{

})
module.exports=router;