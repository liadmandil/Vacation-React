import { getConnection } from "../db";
import { isAlreadyLikeQuery } from "./query";



export async function checkIsAlreadyLiked(vacation_id: number , user_id: number){
    const query = isAlreadyLikeQuery()
    console.log(query , vacation_id)
    const params = [user_id , vacation_id]
    const [result] = await getConnection().execute(query , params);
    console.log("---------------------")
    console.log(` the result is : ${result.length}`)
    console.log("---------------------")
    return result.length;
}

