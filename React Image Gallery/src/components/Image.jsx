import { Link } from "react-router-dom";

export function Image({imageUrl ,id}){
    return(
        <div>
            <Link to={`/image/${id}`}>
                <img  className="image" src={imageUrl}/>   
            </Link>
        </div>
    )
}