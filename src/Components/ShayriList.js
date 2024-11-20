import { useState } from "react"
import ShayriItem from "./ShayariItem";
import AddShayri from "./AddShayri";
import './styles.css'


export default function ShayriList(){

    const [isBlurred, setBlur] = useState(false);
    const [showForm, setShowForm] = useState(false)
    const  [shayris, setShayris] = useState([
        "Muskan Ban Jata Hai Koi,Dil Ki Dhadkan Ban Jata Hai Koi,Kaise Jiye Ek Pal Bhi Un Ke Bin,Jab Zindgi Jeene Ki Wajah Ban Jata Hai Koi,",
        "Heartbeats, the hum of your name,The sweetest song of my life.",
        "love the way you are!"
    ]);


    const addShayri = (newShayri) => {
        setShayris([...shayris,newShayri])
    }
    return (
        <> 
        
        <nav style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{color: 'red', fontSize: 30, fontStyle: 'italic',  margin: 20}}>
                My Words
        </div>
            
            <div>

            {!showForm &&(
                    <button onClick={() => {setShowForm(true); setBlur(true)}} className="btn">
                        Add
                    </button>
                )}
            
        
                {/* <div> hello</div> */}
            </div>    
        </nav> 

         <div className={`flexbox ${isBlurred ? 'blur-background': ''}`}>
            {shayris.map((shayri, index)=> {
               return (
                 <ShayriItem key={index} shayri={shayri} />
            
            )    })}
            
        </div>
        
        <div>
        {showForm &&  <AddShayri addShayri = {addShayri} />}
            {showForm && (
                <button onClick={() => {setShowForm(false); setBlur(false)}} className="cbtn">
                    Cancel
                </button>)
            }
        </div>
       
        </>


    );
};