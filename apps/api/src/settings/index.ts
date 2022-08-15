import express, { NextFunction, Response , Request } from "express";
import { getVacation } from "../vacations/logic";
import { addVacation, deleteVacation, editVac, getAllLikedVacations, getCurremtVac } from "./logic";
import {validateAddVacation } from "../middleware/schemas"
const router = express.Router();


router.post("/add" , validateAddVacation ,addVacationHandler);
router.post("/delete" ,deleteVacationHandler);
router.get("/stats" ,getAllLikedVacationsHandler);
router.post("/currentvac", getCurrentVacHandler)
router.post("/edit", editVacationHandler)


async function editVacationHandler(req , res){
  try{
    const {id , vacation} = req.body;
  const result = await editVac(id , vacation);
  const vacations = await getVacation(1);
  res.json({ message: "edit seccess" , vacations});
  } catch(ex){
    res.json({ message: "something went wrong, please contact liad" });
  }

}

async function getCurrentVacHandler(req , res){
  try{
    const {id} = req.body;
  const result = await getCurremtVac(id);
  res.json({message: "seccuss" , vacation: result});
  } catch(ex){
    res.json({ message: "something went wrong, please contact liad" });
  }
}

async function getAllLikedVacationsHandler(req, res: Response){
  try{
    const results = await getAllLikedVacations();
  res.json({message: "success" , likedVacations: results});
}catch(ex){
  res.json({ message: "something went wrong, please contact liad" });
}
  }

async function addVacationHandler(req, res: Response) {
    try{
      const results = await addVacation(req.body );
    console.log(results);
    res.json({ message: "success"});
    }catch(ex){
      res.json({ message: "something went wrong, please contact liad" });
    }
  }

  async function deleteVacationHandler(req, res: Response) {
    try{
      const results = await deleteVacation(req.body.id);
    const vacations = await getVacation(1);
    res.json({ message: "success" , vacations});
    }catch(ex){
      res.json({ message: "something went wrong, please contact liad" });
    }
  }

  


export default router;
