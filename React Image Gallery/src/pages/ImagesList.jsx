import { useEffect, useState } from "react";
import { Image } from "../components/Image";
import '../style/ImagesList.css'

function ImagesList(){
    const [data , setData ] = useState([])

    const getData = async()=>{
        try {
            const res = await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
            const {photos} = await res.json();
            setData(photos)
            console.log(photos)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(()=>{
        getData()
    },[])

    return(
        <div id="parent">
        {Array.isArray(data) && data.map((e,i)=>{
            return <Image id={e.id} imageUrl={e.url} key={i}/>
        })}
  </div>
    )
}

export default ImagesList;