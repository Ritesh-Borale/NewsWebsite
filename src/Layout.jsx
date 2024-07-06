import React from "react";
import Header from "./Componets/Header/Header";
import Card from "./Componets/Card/Card";
import { Outlet } from "react-router-dom";
import NewsContext from "./Context/NewsContext";
import { NewsContextProvider } from "./Context/NewsContextProvider";

function Layout(){
    return(
        <>
            <Header/>
            <NewsContextProvider>
                <Outlet/>
            </NewsContextProvider>
        </>
    )
}

export default Layout;
