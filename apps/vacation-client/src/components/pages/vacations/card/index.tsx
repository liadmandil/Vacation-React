import {  CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@material-ui/core"
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react"
import css from "../../../../app.module.css"
import { Card } from "react-bootstrap"
import { useAppSelector } from "../../../../store/hooks"
import { IVacation } from "../../../../store/services/vacationsService"
import { FcCancel , FcLike , FcDislike , FcEditImage} from 'react-icons/fc'
import { Link } from "react-router-dom";
import { getVacationsAction } from "../../../../store/asyncFunction/vacations";
const {ROLE_ADMIN} = process.env

export interface IPropsVacation{
    vacation: IVacation
    like: Function
    isLike: boolean,
    edit?: Boolean
}

export function getDateVac(date: Date){
  const date2 = date.toString().split('T')[0]
  const [year , month , day] = date2.split("-")
  const newDate = `${Number(day) + 1}/${month}/${year}`


  return newDate;
}


export function VacationCard(props: IPropsVacation){
const {vacation , isLike , like , edit } = props;
const role = useAppSelector((state)=> state.login.role)

const fromDateVac = getDateVac(vacation.from_date)
const toDateVac = getDateVac(vacation.to_date)



const buttons = {
  false: <h4><FcLike /></h4>,
  true: <h4><FcDislike /></h4>,
  delete: <h4><FcCancel/></h4>,
  edit: <h4><FcEditImage/></h4>
  
}
   
console.log(`the card_id = ${vacation.id} and the state is : ${isLike}`)
    return(
      <div>
        <Card className={css.card}>
        <Card.Body className={css.cardBody} 
          style={{backgroundImage: `url('${vacation.image}')`, backgroundRepeat:" no-repeat", backgroundPosition:"center", backgroundSize:"cover" ,
          textAlign: "center" ,color: "black" }}>
          <h5>{vacation.destination}</h5>
          <p className={css.cardText}>
            {vacation.description}
          </p>
          <p >{fromDateVac} - {toDateVac}</p>
          <p>{vacation.price} $</p>


{role === ROLE_ADMIN?
     
     <div>
       <button onClick={async ()=>{
         await like(vacation.id )
         }}> {buttons.delete}
       </button>
       {edit? <button><Link to={`/edit/${vacation.id}`}>
          {buttons.edit}
       </Link> </button>: <></>
       }
     </div>
 
 
     :
 
     <button onClick={async ()=>{
         console.log(`the state before button onclick: ${isLike}`) 
         await like(vacation.id , !isLike)
         await getVacationsAction(1);
         console.log(`the state after change inside button onclick ${!isLike}`)
       }
     }> 
     {isLike? buttons.true : buttons.false}
     </button>}







        </Card.Body>
       </Card>
      </div>


    )
}






     