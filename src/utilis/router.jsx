import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AllTreatments from "../AllTreatments/AllTreatments";
import Appoinments from "../Appoinments/Appoinments";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";
import Login from "../Login/Login";
import Register from "../Register/Register";

 

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async() => {
                    const servicesRes = await fetch('/service.json');
                    const services = await servicesRes.json();
                    
                    const feedBackRes = await fetch('/happyclients.json');
                    const feedback = await feedBackRes.json(); 

                    return {services, feedback};
                }
            },
            {
                path: '/alltreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/appoinments',
                element: <Appoinments></Appoinments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: async({ params }) => {
                    const res = await fetch('/service.json');
                    const data = await res.json();
                    //console.log(data, params.id);

                    const singleData = data.find(d => d.id == params.id)

                    return singleData;
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;