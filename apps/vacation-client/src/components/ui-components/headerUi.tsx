import { Logout } from "@mui/icons-material";
import { IRoute } from "express";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IRouteApp } from "../../App";
import css from "../../app.module.css"
import { checkTokenExpireVacation, logOutAsync } from "../../store/asyncFunction/login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearTokenLS, getTokenLS } from "../../store/reducers/helpers/localStorage";
import { setRole, setToken } from "../../store/reducers/loginRducer";




export function HeaderUi(props: any){
  const {routes} = props
  const navigate = useNavigate()
  const token = useAppSelector((state)=>state.login.token)
  const role = useAppSelector((state)=>state.login.role)
  const dispatch = useAppDispatch()

  function logout(){
    const token = getTokenLS()
    if (!token) return
    logOutAsync()
    const oldToken = getTokenLS()
    clearTokenLS(oldToken as string)
    dispatch(setToken(""))
    dispatch(setRole("viewer"))
    navigate("/")
    }
  

    return (
        <Row className={css.header}>
            <Col lg={2} sm={4}  xs={1} className={css.divLogo}>
              <div className={css.logo}></div>
            </Col>
            <Col lg={8} sm={4} className={css.links} >
          {routes
            .filter((route: IRouteApp ) => !route.invisible)
            .map((route: IRouteApp ) => (
              <span >
                <Link className={css.link } to={route.path}>{route.linkText}</Link>
              </span>
            ))}
        </Col>
        <Col lg={2} sm={4}>
          <div  className={css.userlogo} onClick={()=>logout()}></div>
        </Col>
        </Row>
    )
}