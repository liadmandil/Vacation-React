import express, { NextFunction, Response , Request } from "express";
import { addFollowVacation, addLike, getLiked, getVacation, removeFollowVacation, removeLike } from "./logic";
import { checkIsAlreadyLiked } from "./validation";
const router = express.Router();


router.get("/", getVacationHandler);
router.get("/alllike", getLikedHandler);
router.post("/like", addLikeHandler);



async function getVacationHandler(req, res: Response) {
  try{
    const clicks = req.query.clickNumber;
      const results = await getVacation(Number(clicks));
      res.json({ message: "success", vacations: results , role: req.userData.role });
  }catch(ex){
    res.json({ message: "something went wrong, please contact liad" });
  }
  }

  async function getLikedHandler(req, res: Response) {
    //@ts-ignore
   try{
    if (!req.userData.id) return res.status(404).json({message: "missing id"})
    const results = await getLiked(req.userData.id);
    res.json({ message: "success", vacations: results });
   }catch(ex){
    res.json({ message: "something went wrong, please contact liad" });
   }
  }

  async function addLikeHandler(req: any, res: Response) {
    console.log(`the like is : ==== ${req.body.likeOrUnlike}`);
    try{
      const {id , likeOrUnlike} = req.body
    if (likeOrUnlike){
      console.log("if the like is true")
      const already = await checkIsAlreadyLiked(id , req.userData.id)
      console.log(`length: ${already}`)
      if (already !== 0){
        return res.status(400).send("this vacation already liked ");
      }
    const results = await addLike(id , req.userData.id);
    await addFollowVacation(id)
    
    }
    else {
      console.log("if the like is false")
      const already = await checkIsAlreadyLiked(id , req.userData.id)
      console.log(`lengthhhhhhhh: ${already}`)
      if (already === 0){
        console.log("already liked###############")
        return res.status(400).send("this vacation isnt liked already ");
      }
      const results = await removeLike(id , req.userData.id);
      await removeFollowVacation(id)
    }
    const vacations = await getLiked(req.userData.id)
    res.json({ message: "liad", vacations });
    } catch(ex){
      res.json({ message: "something went wrong, please contact liad" });
    }

  }




export default router;
