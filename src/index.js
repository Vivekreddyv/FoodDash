import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import Nav from './components/nav';
import Signup from './components/signup';
import Login from './components/login';
import './styles/nav.css'
import './styles/body.css'
import './styles/login.css'
import './styles/signup.css'
import Body from './body';

const Main=()=>{
  return(
    <div>
      <Nav/>
      <Body/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
