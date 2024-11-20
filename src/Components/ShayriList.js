import { useState } from "react"
import ShayriItem from "./ShayariItem";
import AddShayri from "./AddShayri";
import './styles.css'


export default function ShayriList(){

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
        <nav>
            <div>
            {!showForm &&(
                    <button onClick={() => setShowForm(true)} className="btn">
                        Add
                    </button>
                )}
            {showForm &&  <AddShayri addShayri = {addShayri} />}
            {showForm && (
                <button onClick={() => setShowForm(false)} className="btn">
                    Cancel
                </button>)
            }
        
                {/* <div> hello</div> */}
            </div>    
        </nav>      
         <div className="flexbox">
            {shayris.map((shayri, index)=> {
               return (
                 <ShayriItem key={index} shayri={shayri} />
            
            )    })}
            
        </div>

       
        </>


    );
};