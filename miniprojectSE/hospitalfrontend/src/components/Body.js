import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Doctor from "./Doctor";
import Patient from "./patient";
import Allocatedseate from "./Allocatedseate";


const Body=()=>{
    const approuter=createBrowserRouter([
   {
    path:"/",
    element:<Signup/>
   },
   {
    path:"/login",
    element:<Login/>
   },{
    path:"/Home",
    element:<Home/>
   },{
    path:"/Doctorinfo",
    element:<Doctor/>
   },{
    path:"/patieninfo",
    element:<Patient/>
   },{
    path:"/seateallotmnet",
    element:<Allocatedseate/>
   }
    ])
    return(
        <>
     
    <RouterProvider router={approuter}/>
        
        </>
    )
}
export default Body;
