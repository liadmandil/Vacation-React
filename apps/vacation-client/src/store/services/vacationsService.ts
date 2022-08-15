


import axiosInstance from "./index.axios";

export interface IVacation {
  id: number;
  description: string,
  destination: string,
  image: string,
  from_date: Date,
  to_date: Date,
  price: number,
  follower_num: number,
  created_at: Date
}

export interface IVacationsResponse {
  result: Array<IVacation>
}


export async function getVacations(moreClick: number): Promise<IVacationsResponse> {
    const { data } = await axiosInstance.get(`/vacations?clickNumber=${moreClick}`);
    return data;
}



export async function addLike(id: Number , likeOrUnlike: boolean): Promise<any> {
  console.log(`inside add like function: ${likeOrUnlike}`)
    const { data } = await axiosInstance.post("/vacations/like" , {id,likeOrUnlike});
    return data.vacations;
}



export async function getLikedVacations(): Promise<any> {
  const { data } = await axiosInstance.get("/vacations/alllike");
  return data.vacations;
}

