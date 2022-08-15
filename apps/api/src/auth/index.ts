import express, { NextFunction, Response , Request } from "express";
const router = express.Router();
const { validateNewUser, isPasswordMatch, } = require("./validations");
const { addNewUser , isUserExist,} = require("./businessLogic");
import jwt from "jsonwebtoken";
import {verifyToken} from "../middleware/auth";
import { validateLogin, validateRegister } from "../middleware/schemas";
import { signToken } from "./helper";
import { Iuser } from "./validations";




router.post("/login", validateLogin ,loginHandler);
router.post("/register",validateRegister ,registerHandler);
router.get("/logout", logoutHandler);
router.get("/checkVarify", verifyToken , verifyCheckHandler);



function logoutHandler(req: Request, res: Response) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) return res.status(400).json({message: "user isnt authorized"});
  res.status(200).json({ message: "user logged out" });
}

async function loginHandler(req: Request, res: Response) {
  try{
    if (!req.body.userName || !req.body.password) return res.status(400).send("missing parameters");
    const { userName, password } = req.body;
    console.log(userName, "userName " , password , " password");
    const currentUser = await isUserExist(userName);
    if (!currentUser) return res.status(404).send("User not found");
    console.log(currentUser);
    if (!isPasswordMatch(currentUser, password)){
      return res.status(401).send("User not Authorized - Go to Hell!");
    }
    const { first_name, last_name, user_name, id } = currentUser;
    const token = signToken({
      first_name,
      last_name,
      user_name,
      id,
    });
    return res.json({ user_name, message: `success`, token });
  }catch(ex){
    res.json({ message: "something went wrong, please contact liad" });
  }
}

async function registerHandler(req: Request, res: Response) {
  const currentUser = await isUserExist(req.body.user_name);
  if (currentUser){
     return res.status(404).send("User name already exist");
  }
  const user:Iuser = addNewUser(req.body)
  const {first_name , last_name, user_name, password , id} = user
  const token = signToken({
    first_name,
    last_name,
    user_name,
    id
  });
  res.json({  message: `success` , token });
}

async function verifyCheckHandler(req , res){
  res.status(200).json({  message: `success` })
}





export default router;
