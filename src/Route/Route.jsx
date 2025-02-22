import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Components/Mainlayouts/Mainlayouts";
import Errorelement from "../Components/Errorelement/Errorelement";
import Home from "../Components/Home/Home";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Mainlayouts></Mainlayouts>,
    errorElement:<Errorelement></Errorelement>,
    children:[
         {
            path:"/",
            element:<Home></Home>
         }
    ]
  }
])
export default router;