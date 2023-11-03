import jwt from 'jsonwebtoken';

const verifyToken = (token, secretKey, req, res, next) => {
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.userEmail = decoded.email;
    next();
  });
};

export default verifyToken;
