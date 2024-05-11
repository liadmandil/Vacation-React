import { Logout } from "@mui/icons-material";
import { Alert, Button } from "antd";
import "antd/dist/antd.css";
import { IRoute } from "express";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IRouteApp } from "../../App";
import css from "../../app.module.css"
import { checkTokenExpireVacation, logOutAsync } from "../../store/asyncFunction/login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearTokenLS, getTokenLS } from "../../store/reducers/helpers/localStorage";
import { setRole, setToken } from "../../store/reducers/loginRducer";




export function AlertVacation(){

    return (
        <div style={{position: "absolute" , top: "1%" , left:"28%"}}>
          <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description"
        type="error"
        showIcon
        closable
        
      />
    </div>
    )
}