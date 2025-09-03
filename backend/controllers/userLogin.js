const users=require('../models/users')
const jwt=require('jsonwebtoken')
const bycrpt=require('bcrypt')

const LoginUser=async(req , res)=>{
    const {email,password}=req.body;
    console.log('outer login');
    try{
    const user=await users.findOne({email:email});
    if(!user){
        console.log('inner user vrification login');
         return res.status(404).json({ message: 'User not found' });
    }
    if (password !== user.password) {
      console.log('❌ Invalid credentials');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
   
    const payload={id:user._id};
    const secretKey='supersecret123';
    const token=jwt.sign(payload,secretKey,{ expiresIn: '1h' });
    res.json({token});
}
    catch(error){
        console.log('Login failed',error);
        res.status(500).json({ message: 'Internal server error' });

    }

}
module.exports=LoginUser
