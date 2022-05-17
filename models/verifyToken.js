import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access Denied" });
  // try {
  //   const verified = jwt.verify(token, "secret");
  //   req.user = verified;
  //   next();
  // } catch {
  //   (error) => res.send("Invalid token");
  // }

  jwt.verify(token, "secret", async (err, user) => {
    try {
      if (err)
        return await res.status(403).json({ error: "Token is not valid" });
      req.user = user;
      next();
      console.log(err);
    } catch {
      res.status(401).json({ error: "Validation failed" });
    }
  });
};
export default verify;
