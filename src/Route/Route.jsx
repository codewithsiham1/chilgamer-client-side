import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Components/Mainlayouts/Mainlayouts";
import Errorelement from "../Components/Errorelement/Errorelement";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";
import Details from "../Components/Details/Details";
import AddReview from "../Components/Pages/AddReview/AddReview";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Allreview from "../Components/Pages/Allreview/Allreview";
import Myreaplay from "../Components/Pages/Myreaplay/Myreaplay";
import Gamewatchlilst from "../Components/Gamewatchlist/Gamewatchlist";
import UpdateReview from "../Components/UpdateReview/UpdateReview";

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
         element:<Myreaplay></Myreaplay>
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
         path:"/review/:id",
         element:<Details></Details>,
         loader: async ({ params }) => {
            const { id } = params;
            const response = await fetch(`/game.json`);
            const data = await response.json();
            const game = data.find(game => game.id === parseInt(id));
            return game;
        },

         
    },
    {
   path:"/updateReview/:id",
   element:<UpdateReview></UpdateReview>
    },
         {
            path:"/footer",
            element:<Footer></Footer>
         }
    ]
  }
])
export default router;