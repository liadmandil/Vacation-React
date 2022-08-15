import { useState, useEffect } from "react";
import css from "../../../app.module.css"
import getLoginAction from "../../../store/asyncFunction/login";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { WithLoading } from "../../ui-components/with-loading";
import { clearTokenLS, getTokenLS } from "../../../store/reducers/helpers/localStorage";
import axiosInstance from "../../../store/services/index.axios";
import { useNavigate } from "react-router-dom";
import {FaDeaf} from 'react-icons/fa'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import vacationsReducer from "../../../store/reducers/vacationsReducer";
import { getAllLikedVacation } from "../../../store/asyncFunction/settings";



ChartJS.register(ArcElement, Tooltip, Legend);



export function StatsPage() {


    const isLoading = useAppSelector((state)=> state.loader.isLoading)
    const likedVacations = useAppSelector((state)=> state.vacations.LikedVacationsObject)
    

    const data = ()=>{
        const colors:Array<any>= []
        const likes:Array<any>= []
        const labels:Array<any>= []

        likedVacations?.map((v: any)=>{  //colors
          const stringColor = Math.floor(Math.random()*16777215).toString(16);
          const realColor = `#${stringColor}`
          colors.push(realColor);
          likes.push(Number(v.follower_num));
          labels.push(`${v.destination}, ${v.from_date.split('T')[0]}---${v.to_date.split('T')[0]}`)
          return v
        })

        likedVacations?.map((v)=>{  //likes
           
            return v;
          })

        return {
          labels,
          datasets:[{
            label: '# of likes',
            data: likes,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
        }]
    }
    }

    useEffect(()=>{
      getAllLikedVacation()
    },[])
   




    return (
    <WithLoading isLoading={isLoading}>
        <div className={css.chart}>
          <Pie data={ data()}  options={{  }} />
        </div>
    </WithLoading>
    )
}
