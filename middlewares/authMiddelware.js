const JWT = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "Auth Failed",
      });
    }

    const token = authorizationHeader.split(" ")[1];
    const decode = await JWT.verify(token, process.env.JWT_SECRET);
    req.body.userId = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failed",
    });
  }
};

module.exports = authMiddleware;
