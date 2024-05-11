export interface Iuser{
  user_name: string,
  first_name: string,
  last_name: string,
  password: string,
  id: number
}


function validateNewUser(req, res, next) {
  const { user_name, password, last_name, first_name } = req.body;
  if (!user_name || !password || !last_name || !first_name){
    return res.status(400).send("missing paramters");
  }
  
  next();
}

function isPasswordMatch(user , password2){
  console.log("password matching??????")
   return user.password === password2
}



module.exports = {
  validateNewUser,
  isPasswordMatch
};
