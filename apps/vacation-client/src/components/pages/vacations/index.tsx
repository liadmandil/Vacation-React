import { useState, useEffect } from "react";
import { FormCheck} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteVacationAction } from "../../../store/asyncFunction/settings";
import {addLikeAction, getLikedVacationAction, getVacationsAction} from "../../../store/asyncFunction/vacations";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setLikedVacationsObject } from "../../../store/reducers/vacationsReducer";
import { VacationCard } from "./card";
import css from "../../../app.module.css"
import { Col , Row} from "react-bootstrap";
import { WithLoading } from "../../ui-components/with-loading";
import { setLoader } from "../../../store/reducers/loaderReducer";
import axiosInstance from "../../../store/services/index.axios";
import { clearTokenLS, getTokenLS } from "../../../store/reducers/helpers/localStorage";
import {MdArrowForwardIos} from 'react-icons/md'

const {ROLE_ADMIN} = process.env


export function VacationsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [allVacations , setAllVacations] = useState(true);
  const [moreClick , setMoreClick] = useState(1)
  const vacations = useAppSelector((state)=>state.vacations.vacations)
  const liked = useAppSelector((state)=> state.vacations.likedVacation)
  const likedVacations = useAppSelector((state)=>state.vacations.LikedVacationsObject)
  const role = useAppSelector((state) =>state.login.role)
  const loading = useAppSelector((state)=>state.loader.isLoading)
  let likedVacationsRender: Array<any> = []

  
    useEffect(() => {
        checkTokenExpireVacation()
        console.log("inside vacations page")
        dispatch(setLoader(true))
        getVacationsAction(1)
        console.log("inside liked vacation effect page")
        getLikedVacationAction()
    }, [])

    useEffect(()=>{
      if (vacations){
        likedVacationsRender = []
        for (let index = 0; index < vacations.length; index++) { 
          const currnetV = liked?.find((l)=>{ return l===vacations[index].id})   
          if (currnetV){
            likedVacationsRender.push(vacations.find((v)=>{ return currnetV === v.id}))
          }      
        }
        dispatch(setLikedVacationsObject(likedVacationsRender))
      }
    },[liked])



    async function checkTokenExpireVacation(){
      const currentToken = getTokenLS()
      if (!currentToken) navigate("/")
         try{
          const { data } = await axiosInstance.get("/auth/checkVarify");
          console.log(data.message)
         }
         catch(ex){
          console.log("errorrrrrrrrrrrrrrrrrrrrr")
          const OldToken = getTokenLS()
          clearTokenLS(OldToken as string)
          navigate("/")
         }
    }

  function like(id: number , likeOrUnlike: boolean){
    console.log(`inside like from vacation page=========${likeOrUnlike}=======`)
    addLikeAction(id , likeOrUnlike)
    setMoreClick(1)
  } 

  function deleteVacation(id: number){
    deleteVacationAction(id) 

  }

  function addMoreVacations(){
    getVacationsAction(moreClick + 1);
    setMoreClick(moreClick + 1);
  }


const cards =( allVacations? 
  (role === ROLE_ADMIN?  
  <div style={{display: "inline-flex"}}>{vacations?.map((vac)=>{
     return <VacationCard vacation={vac} edit={true} like={(id: number )=>(deleteVacation(id ))} 
      isLike={liked?.find((l)=>{
       return l === vac.id})? true : false} 
        />
     })}</div> :
     <div  style={{display: "inline-flex"}}>{vacations?.map((vac)=>{
     return <VacationCard vacation={vac} like={(id: number , likeOrUnlike: boolean)=>(like(id , likeOrUnlike))}
      isLike={liked?.find((l)=>{
       return l === vac.id})? true : false}/>
     })}</div>
      )
  :
  likedVacations?.length?  
  <div  style={{display: "inline-flex"}}>{
  likedVacations?.map((vac)=>{
  return <VacationCard vacation={vac} like={(id: number , likeOrUnlike: boolean)=>(like(id , likeOrUnlike))}
  isLike={liked?.find((l)=>{
   return l === vac.id})? true : false}/>
  })}</div> : <div><h1>there isnt any like</h1></div>
)



const header = allVacations? <span>vacations</span> : <span>liked vacation</span> 

  return (
       <div >
          <Row className={css.vacationPage}>
            <div className={css.likeToggle}>{role !== ROLE_ADMIN? 
               <FormCheck 
                 type="switch"
                 id="custom-switch"
                 label ="show only Liked"
                 onChange={()=>{setAllVacations(!allVacations)}}
               />
              : <></>}
             </div>
            <Col lg={4} xl={4} sm={12} xs={12} style={{}} className={`${css.sideVacation} `}></Col>
            <Col lg={7} xl={7} sm={11} xs={11} className={css.vacations} style={{height: "50%" }}>
          
              <WithLoading isLoading={loading}>
                <Row>
                 <Col lg={11} sm={11} xs={11}>
                   {cards}
                 </Col>
                 <Col lg={1} sm={1} xs={1}>
                 <span style={{display:"grid", marginTop: "120px", paddingLeft: "90%"}}><MdArrowForwardIos onClick={()=>{ addMoreVacations() }} style={{cursor: "pointer"}}/></span>
                 </Col>
                </Row>
              </WithLoading>   
              
              
        </Col>
        {/* <Col lg={1} sm={1} xs={1} style={{marginTop: "7em"}}><MdArrowForwardIos onClick={()=>{ addMoreVacations() }}/></Col> */}
      </Row>
       </div>
    
  );
}
