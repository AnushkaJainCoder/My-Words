import { useState } from "react";
import './styles.css';

export default function AddShayri({addShayri}){

    const [newShayri, SetNewShayri] = useState("");
    const [error, setError] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        if(!newShayri.trim()){
            setError("Please write something before submit")
            return;
        }

        setError("");
        // if(newShayri.trim()){
            addShayri(newShayri);
            SetNewShayri("");
        // }
    }
    return (
        <>
                 {error && <p style={{color: "red", fontSize: 12, }}>{error}</p>}

                <div className="form-container">
            
             <form onSubmit={handleSubmit}  style={{width: 50}} >
                {/* <input type = "text"
                onChange={(e) => SetNewShayri(e.target.value)} 
                value={newShayri} 
                placeholder="Enter new shayri" 
                className="textBox"/> */}
       
                <textarea type = "text"
                onChange={(e) => SetNewShayri(e.target.value)} 
                value={newShayri} 
                placeholder="Enter new shayri" 
                className="textBox" />
                
                <br />
                <button type="submit" className="subm">Add </button>
            </form>
        </div>
       
       </>
    )
}