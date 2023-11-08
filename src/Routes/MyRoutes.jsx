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
import JobDetails from "../Pages/Details/JobDetails";
import UpdatePost from "../Pages/PostedJobs/UpdatePost";
import PrivateRoute from "../Auth/PrivateRoute";

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
            element: <PrivateRoute> <AddJob /> </PrivateRoute>
        },
        {
            path: '/myPostedJobs',
            element: <PrivateRoute> <MyPostedJobs /> </PrivateRoute>,
        },
        {
            path: '/myBids',
            element: <PrivateRoute> <MyBids /> </PrivateRoute>,
            
        },
        {
            path: '/bidRequests',
            element:<PrivateRoute> <BidRequests /> </PrivateRoute>,
        },
        {
            path: '/jobDetails/:id',
            element: <PrivateRoute> <JobDetails /> </PrivateRoute>,
            loader: ({params}) => fetch(`https://job-box-server-nu.vercel.app/api/v1/tabs/${params.id}`)
        },
        {
            path: '/updateJobs/:id',
            element: <UpdatePost />,
            loader: ({params}) => fetch(`https://job-box-server-nu.vercel.app/api/v1/userPostJobs/${params.id}`)
        }
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