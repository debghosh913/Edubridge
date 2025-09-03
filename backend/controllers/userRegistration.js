// controllers/userController.js
const User = require('../models/users');

const registerUser = async  (req, res)=> {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    
    // Safely get uploaded file name if exists
    const profileImageFilename = req.file ? req.file.filename : '';
    const profileImage = profileImageFilename
      ? `http://localhost:5000/uploads/${profileImageFilename}`
      : '';

    const newUser = new User({
      name,
      email,
      password, // Remember: hash this in production!
      profileImage,
    });

    await newUser.save();

    res.status(201).json({
      message: 'User registered!',
      user: newUser,
    });

  } catch (err) {
    console.log('from the backend')
    console.error(err);
    res.status(500).json({ message:err.message });
  }
};

module.exports =  registerUser ;
