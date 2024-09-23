
import {createBrowserRouter} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";
import { Routes } from "../routes";
import ProductDetailPage from "../pages/ProductDetailPage";
const router = createBrowserRouter([
    {
      path: `${Routes.HOME}`,
      element: <Homepage/>,
    },
    {
        path: `${Routes.Product}`,
        element: <Productpage/>,
      },
      {
        path: `${Routes.Single_Product.STATIC}`,
        element: <ProductDetailPage/>,
      },
  ]);

  export default router;