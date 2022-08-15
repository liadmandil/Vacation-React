import React, { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import css from "./app.module.css";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
// import { NotFound } from "./components/pages/notFound";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { LoginPage } from "./components/pages/login";
import { RegisterPage } from "./components/pages/register";
import { VacationsPage } from "./components/pages/vacations";
import { SettingsPage } from "./components/pages/setting";
import { useAppSelector } from "./store/hooks";
import { Header } from "react-bootstrap/lib/Modal";
import { HeaderUi } from "./components/ui-components/headerUi";
import { StatsPage } from "./components/pages/stats";
import { checkTokenExpireVacation, logOutAsync } from "./store/asyncFunction/login";
import { EditVacationPage } from "./components/pages/editVacation";
import { AlertVacation } from "./components/ui-components/alert";
import AppModal from "./components/pages/appModal";
// import AppModal from "./components/pages/appModal";
const {ROLE_ADMIN} = process.env



export interface IRouteApp {
  path: string;
  element: any;
  linkText: string;
  invisible?: boolean;
}




function App() {

  const role = useAppSelector((state)=>state.login.role)
  const token = useAppSelector((state)=>state.login.token)

  const routes: Array<IRouteApp > = [
    { path: "/", element: <LoginPage />, linkText: "Login" , invisible: true },
    { path: "/register", element: <RegisterPage />, linkText: "register" , invisible: true}, 
    { path: "/vacations", element: <VacationsPage />, linkText: "Vacations", invisible: token? false : true },
    { path: "/settings", element: <SettingsPage />, linkText: "settings", invisible: role === ROLE_ADMIN?  false: true },
    { path: "/edit/:edit", element: <EditVacationPage />, linkText: "stats", invisible: true },
    { path: "/stats", element: <StatsPage />, linkText: "stats", invisible: role === ROLE_ADMIN?  false: true },
    // { path: "*", element: <NotFound />, linkText: "", invisible: true },
  ];

  


  return (
     <div className={`${css.bg}`}>
      {/* <AlertVacation/> */}
      <div >
       <Router>
         <HeaderUi routes={routes} />
       <Routes>
          {routes.map((route: IRouteApp) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
     </div>
       <AppModal />
     </div>
  );
}

export default App;
