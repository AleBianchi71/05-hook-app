import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useSate/CounterApp'
//import { CounterWithCustomHook } from './01-useSate/CounterWithCustomHook'
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { FormWithCustomHooks } from "./02-useEffect/FormWithCustomHooks";
//import { MultipleCustomHooks } from "./03-examples/multipleCustomHooks";
//import { FocusScreen } from "./04-useState/FocusScreen";
//import { Layout } from "./05 - useLayoutEffect/layout";
//import { Memorize } from "./06-memos/Memorize";
//import { MemoHook } from "./06-memos/MemoHooks";
//import { CallbackHook } from "./06-memos/CallbackHook";
//import { Padre } from "./07-tarea-memo/Padre";
//import './08-useReducer/intro-reducer'
//import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
  <MainApp />
    {/* <React.StrictMode> */}
 
  </BrowserRouter>
    
);
