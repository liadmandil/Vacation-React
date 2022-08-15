import { getConnection } from "../db";
import { addFollowVactionQuery, addLikeQuery, getAllLikedQuery, getAllVacation, removeFollowVactionQuery, removeLikeQuery } from "./query";

async function getVacation(clicks: number) {
  console.log(clicks)
  const query = getAllVacation();
  console.log(query);
  let clicksNew = (clicks - 1) * 5;
  if (clicks === 1){
     clicksNew = 0;
  }
  const params = [ clicksNew.toString() ]
  const [result] = await getConnection().execute(query , params);
  return result;
}

async function getLiked(id: number){
  const query = getAllLikedQuery()
  console.log(query)
  const params = [id]
  const [result] = await getConnection().execute(query , params)
  console.log(result)
  return result
}

async function addLike(vacationId: number , userId: number){
  const query = addLikeQuery()
  const params = [userId, vacationId]
  const [result] = await getConnection().execute(query , params);
  console.log(result)
  return result;
}

async function removeLike(vacationId: number , userId: number){
  const query = removeLikeQuery()
  const params = [userId, vacationId]
  const [result] = await getConnection().execute(query , params);
  console.log(result)
  return result;
}

async function addFollowVacation(vacId: number ){
  const query = addFollowVactionQuery()
  const params = [vacId]
  const [result] = await getConnection().execute(query , params);
  console.log("--------------------addfollow----------------------")
  console.log(result)
  return result;
}

async function removeFollowVacation(vacId: number ){
  const query = removeFollowVactionQuery()
  const params = [vacId]
  const [result] = await getConnection().execute(query , params);
  console.log("--------------------removefollow----------------------")
  console.log(result)
  return result;
}





export { getVacation , addLike , getLiked , removeLike , addFollowVacation , removeFollowVacation};
