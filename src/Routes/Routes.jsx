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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomeCollegeDetail from "../Pages/Home/Colleges/HomeCollegeDetail";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/homeCollege')
        },
        {
          path: 'homeCollege/:id',
          element:<PrivateRoute><HomeCollegeDetail></HomeCollegeDetail></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/homeCollege/${params.id}`)
        },
        {
            path:'college',
            element: <College></College>
        },
        {
          path: 'college/:id',
          element: <PrivateRoute><CollegeDetail></CollegeDetail></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
        }, 
        {
          path: 'admission',
          element: <Admission></Admission>
        },
        {
          path: 'admissionForm',
          element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>
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