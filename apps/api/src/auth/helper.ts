import jwt from "jsonwebtoken";
export function signToken(obj: {
  first_name: string;
  last_name: string;
  user_name: string;
  id: number;
}) {
  const token = jwt.sign(
    {
      data: {
        ...obj,
        password: null,
        role: obj.id===Number(1)? "admin" : "viewer" 
      },
    },
    process.env.SECRET || "secretsecretVacation315096073",
    { expiresIn: "10h" }
  );

  return token;
}
