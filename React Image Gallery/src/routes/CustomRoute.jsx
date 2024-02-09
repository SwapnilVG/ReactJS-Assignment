import { Route, Routes } from "react-router-dom";
import ImagesList from "../pages/ImagesList";
import ImageDetails from "../pages/ImageDetails";



function CustomRoute(){
    return(
            <Routes>
                <Route path="/" element={<ImagesList/>}/>
                <Route  path="/image/:id" element={<ImageDetails/>}/>
            </Routes>
        
    )
}

export default CustomRoute;