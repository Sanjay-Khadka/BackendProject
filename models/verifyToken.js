import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, "secret");
    req.user = verified;
  } catch {
    (error) => res.send("Invalid token");
  }
};
export default verify;
