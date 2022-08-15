import { getConnection } from "../db";
import { Iuser } from "./validations";



async function isUserExist(userName: string) {
  console.log("starting")
  const query = 'SELECT first_name, last_name, user_name, password, id FROM `project-vacation`.users WHERE  users.user_name = ?';
  const [result] = await getConnection().execute(query, [userName]);
  console.log("ending")
  return result[0];
}


async function addNewUser(user: Iuser){
   const {user_name , first_name , last_name , password} = user
   const query = " INSERT INTO `project-vacation`.`users` (`first_name`, `last_name`, `user_name`, `password`) VALUES (?,?,?,?);"
  const [result] = await getConnection().execute(query, [first_name, last_name, user_name, password]);
  return result[0];
}





module.exports = {
  isUserExist,
  addNewUser
};
