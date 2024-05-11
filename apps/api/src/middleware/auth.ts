import jwt from "jsonwebtoken";
export function verifyToken(req, res, next) {
  const authorization = req?.headers?.authorization;
  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      console.log("____________tokenError_______________")
      return next({ ...err, status: 401 });
    } else {
      req.userData = decoded?.data;
      // console.log("#################### req.user ######################");
      // console.log(req.userData);
      // console.log("#################### req.user ######################");
      return next();
    }
  });
}

export function verifyAdmin(req, res, next){
  const authorization = req?.headers?.authorization;
  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      return next({ ...err, status: 401 });
    } else {
      if (decoded.data.role !== "admin"){ return res.status(401).json({message: "visiters cant change any data in ths website"});}
      return next();
    }
  });
}
