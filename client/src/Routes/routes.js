import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import EditProfile from "../Pages/EditProfile";
import { redirect } from "react-router-dom";

const routes = [
    {
        name: "Home",
        path: "/home",
        component: <Home />
    },
    {
        name: "Main",
        path: "/",
        component: () => redirect('/home')
    },
    {
        name: "Sign Up",
        path: "sign-up",
        component: <Signup />
    },
    {
        name: "Login Up",
        path: "login",
        component: <Login />
    },
    {
        name:"Edit Profile",
        path:"/profile/edit",
        component:<EditProfile/>
    }
];

export default routes;