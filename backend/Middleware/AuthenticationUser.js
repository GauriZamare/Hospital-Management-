const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const extractedToken = token.split(" ")[1];

  try {
    const decoded = jwt.verify(extractedToken, process.env.SECRET_KEY);
    req.user = decoded.userID;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = {
  authenticateUser,
};
