import { useState, createContext } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
  return <MyContext.Provider>{props.children}</MyContext.Provider>;
};
