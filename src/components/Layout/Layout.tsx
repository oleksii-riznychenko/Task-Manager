import React, {JSX} from "react";
import {ILayout} from "./Layout.types";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import "./Layout.scss";

export const Layout = ({children}: ILayout): JSX.Element => {
  return (
    <div className='layout'>
      <Header />
      <main className='layout__main'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
