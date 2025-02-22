import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Components/Mainlayouts/Mainlayouts";
import Errorelement from "../Components/Errorelement/Errorelement";
import Home from "../Components/Home/Home";
import Allreview from "../Components/Pages/Allreview";
import Addreview from "../Components/Pages/Addreview";
import Gamewatchlilst from "../Components/Pages/Gamewatchlilst";
import Myreview from "../Components/Pages/Myreview";
import Footer from "../Components/Footer/Footer";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Mainlayouts></Mainlayouts>,
    errorElement:<Errorelement></Errorelement>,
    children:[
         {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("/game.json")
         },
         {
            path:"/allreview",
            element:<Allreview></Allreview>
         },
         {
            path:"/addreview",
            element:<Addreview></Addreview>
         },
         {
         path:"/myreview",
         element:<Myreview></Myreview>
         },
         {
            path:"/gamewatchlist",
            element:<Gamewatchlilst></Gamewatchlilst>
         },
         {
            path:"/footer",
            element:<Footer></Footer>
         }
    ]
  }
])
export default router;