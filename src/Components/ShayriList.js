import { useState } from "react"
import ShayriItem from "./ShayariItem";


export default function ShayriList(){

    const  [shayris, setShayris] = useState([
        "Muskan Ban Jata Hai Koi,Dil Ki Dhadkan Ban Jata Hai Koi,Kaise Jiye Ek Pal Bhi Un Ke Bin,Jab Zindgi Jeene Ki Wajah Ban Jata Hai Koi,",
        "eartbeats, the hum of your name,The sweetest song of my life.",
        "love the way you are!"
    ]);

    return (
        <div>
            {shayris.map((shayri, index)=> {
               return (
                 <ShayriItem key={index} shayri={shayri} />
            
            )    })}
            <div> hello</div>
        </div>
    );
};