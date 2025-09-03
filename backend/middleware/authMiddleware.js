const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const publicRoutes = [
    '/api/users/register',
    '/api/users/login'
  ];
   console.log('📦 authMiddleware imported');
   
  console.log('🔍 Request URL:', req.originalUrl);

  // Match base public routes
  const isPublic = publicRoutes.some(route =>
    req.originalUrl.startsWith(route)
  );

  if (isPublic) {
    return next(); // skip auth check
  }

  try {
    const token = req.headers['authorization']?.split(' ')[1];
   
    const secretKey = 'supersecret123';
    
    const decode = jwt.verify(token, secretKey);
    console.log('decoded id')
    req.user = decode.id;
    next();
  } catch (err) {
    console.log('❌ Auth failed:', err.message);
    return res.status(401).json({ message: 'Authorization failed from middleware' });
  }
};

module.exports = authMiddleware;
