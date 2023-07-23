import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import College from "../Pages/CollegeRoute/College";
import CollegeDetail from "../Pages/CollegeDetail/CollegeDetail";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'college',
            element: <College></College>
        },
        {
          path: 'college/:id',
          element: <CollegeDetail></CollegeDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
        }, 
        {
          path: 'admission',
          element: <Admission></Admission>
        },
        {
          path: 'admissionForm',
          element: <AdmissionForm></AdmissionForm>
        },
        {
          path: 'myCollege', 
          element: <MyCollege></MyCollege>
        },
        {
          path: 'login', 
          element: <Login></Login>
        },
        {
          path: 'signUp', 
          element: <SignUp></SignUp>
        },
        {
          path: 'profile',
          element: <Profile></Profile>
        }
      ]
    },
  ]);

export default router