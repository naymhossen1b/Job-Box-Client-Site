import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Registar from "../Auth/Registar";
import AddJob from "../Pages/Add Job/AddJob";
import MyPostedJobs from "../Pages/PostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";
import Error from "../Shared/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/addJob',
            element: <AddJob />
        },
        {
            path: '/myPostedJobs',
            element: <MyPostedJobs />
        },
        {
            path: '/myBids',
            element: <MyBids />
        },
        {
            path: '/bidRequests',
            element: <BidRequests />
        },
      ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Registar />
    }
  ]);


  export default router;