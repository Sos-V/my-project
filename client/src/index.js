import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonCreator from "./Pages/PersonCreator";
import PersonUpdater from "./Pages/PersonUpdater";
import Persons from './Pages/Persons';
import PersonRemover from './Pages/PersonRemover';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/persons",
        element: <Persons />,
      },
      {
        path: "/createPerson",
        element: <PersonCreator />,
      },
      {
        path: "/update/:id",
        element: <PersonUpdater />,
      },
      {
        path: "/delete/:id",
        element: <PersonRemover/>
      }

    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
