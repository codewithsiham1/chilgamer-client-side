import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Components/Mainlayouts/Mainlayouts";
import Errorelement from "../Components/Errorelement/Errorelement";
import Home from "../Components/Home/Home";
import Allreview from "../Components/Pages/Allreview";
import Gamewatchlilst from "../Components/Pages/Gamewatchlilst";
import Myreview from "../Components/Pages/Myreview";
import Footer from "../Components/Footer/Footer";
import Details from "../Components/Details/Details";
import AddReview from "../Components/Pages/AddReview/AddReview";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";

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
            element:<AddReview></AddReview>
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
          path:"/register",
          element:<Register></Register>
         },
         {
        path:"/login",
        element:<Login></Login>
         },
         {
         path:"/details/:id",
         element:<Details></Details>,
         loader:async({params})=>{
            const {id}=params
            const response=await fetch("/game.json")
            const games=await response.json();
            return games.find(game=>game.id===parseInt(id));
         }
         },
         {
            path:"/footer",
            element:<Footer></Footer>
         }
    ]
  }
])
export default router;