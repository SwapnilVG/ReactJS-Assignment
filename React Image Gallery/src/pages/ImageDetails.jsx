import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/ImageDetails.css'
function ImageDetails(){
    const [data ,setData] = useState([])
    const {id} = useParams()

    const getData = async() =>{
       try {
        const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        const {photo} = await res.json();
        setData(photo)
       } catch (error) {
        console.error("Error fetching data:", error);
       }
    }

    useEffect(()=>{
        getData()
    },[])

     return (
        <div id="singlePhoto">
                <img src={data?.url} alt="" />
                <div>
                    <h1>{data?.title}</h1>
                    <p>
                            {data?.description}
                    </p>
                </div>
        </div>
    )
}

export default ImageDetails;