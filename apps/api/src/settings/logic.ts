import { getConnection } from "../db"
import { AddVacationQuery, deleteVacationQuery, editVacationQuery, getAllLikedVacationsQuery, getCurrentVacationQuery } from "./query"



export async function getAllLikedVacations(){
  const query = getAllLikedVacationsQuery()
  const [result] = await getConnection().execute(query)
  console.log(result)
  return result
}

export async function addVacation(vacation:any ){
  const { description, destination, image, from_date, to_date, price} = vacation;
  const query = AddVacationQuery();
  const params = [description, destination, image, from_date, to_date, price];
  const [result] = await getConnection().execute(query , params);
  console.log(result);
  return result;
}

export async function deleteVacation(id: number ){
  const query = deleteVacationQuery();
  const params = [id];
  const [result] = await getConnection().execute(query , params);
  console.log(result);
  return result;
}

export async function getCurremtVac(id: number){
  const query = getCurrentVacationQuery();
  const params = [id];
  const [result] = await getConnection().execute(query , params);
  console.log(result);
  return result;
}

export async function editVac(id: number , vacation:any){
  
// 2022-07-25T21:00:00.000Z
// 2022-08-06 15:38:40

const {from_date , to_date } = vacation
 const fromDate = (from_date as string).replace("T" , " ").split(".")[0]
 const toDate = (from_date as string).replace("T" , " ").split(".")[0]
 console.log(`=====the from date: ${fromDate} ======`)
  const query = editVacationQuery()
  const params = [vacation.description , vacation.destination , vacation.image ,fromDate ,toDate , vacation.price , id]
  const [result] = await getConnection().execute(query , params)
  console.log(result)
  return result;
}