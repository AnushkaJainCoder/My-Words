import { useState } from "react";

export default function AddShayri({addShayri}){

    const [newShayri, SetNewShayri] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(newShayri.trim()){
            addShayri(newShayri);
            SetNewShayri("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type = "text"
             onChange={(e) => SetNewShayri(e.target.value)} 
             value={newShayri} 
             placeholder="Enter new shayri" 
             className="textBox"/>
            <button type="submit" >Add Your Words</button>
        </form>
    )
}