import { Module } from "module"

const getAllVacation = ()=>{
    return "SELECT * FROM `project-vacation`.vacations order by created_at DESC LIMIT 5 OFFSET ?"
}

const addLikeQuery = ()=>{
    return "INSERT INTO `project-vacation`.`like_vacation` (`user_id`, `vacation_id`) VALUES (?,?)";
}

const isAlreadyLikeQuery = ()=>{
    return "SELECT * FROM `project-vacation`.like_vacation WHERE user_id = ? AND vacation_id = ?;";

}

const getAllLikedQuery = ()=>{
    return "SELECT distinct(vacations.id) FROM `project-vacation`.vacations JOIN `project-vacation`.like_vacation ON vacations.id = like_vacation.vacation_id and like_vacation.user_id = ?"
}


const removeLikeQuery = ()=>{
   return "DELETE FROM `project-vacation`.`like_vacation` WHERE user_id = ? AND vacation_id = ?;"   
}

const addFollowVactionQuery = ()=>{
    return "UPDATE `project-vacation`.`vacations` SET `follower_num` =`follower_num`+1 WHERE `id` = ? "
}

const removeFollowVactionQuery =()=>{
    return "UPDATE `project-vacation`.`vacations` SET `follower_num` =`follower_num`- 1 WHERE `id` = ?"
}




export { getAllVacation , addLikeQuery , isAlreadyLikeQuery , getAllLikedQuery , removeLikeQuery , addFollowVactionQuery , removeFollowVactionQuery};
