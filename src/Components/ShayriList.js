import { useState } from "react"
import ShayriItem from "./ShayariItem";
import AddShayri from "./AddShayri";
import './styles.css'


export default function ShayriList(){

    const [isBlurred, setBlur] = useState(false);
    const [showForm, setShowForm] = useState(false)
    const  [shayris, setShayris] = useState([
        "Mana ki tum sabsa alg ho, \n Alag hona koi gunah to nhi, \n hota to tum hmara bich na hota, alg hona to ak bat h, chlo tuma m kuch to bat h......",
        "Raste alag h par manzil vhi h, \njism alag h par jan ak hi ha..  ",
        "Mohabbat utni kro jitni sah sko, vrna jyada mithi to chai bhi takleef dati h... ",
   
        "Koi tumhari zindagi banata hai, Koi tumhari zindagi bigadta hai, Jo dono karta hai, wo hota hai Dost,",
        "Ek Tere Siwa Hum Kisi Aur Ke Kaise Ho Sakte Hai, Tu Khud Hi Soch Ke Bata Tere Jaisa Aur Koi Hai Kiya. ",
        "lTum waqt ke saath dhalne ke liye nahi, Tum waqt ko badalne ke liye bane ho. ",
   
        // "Koi tumhari zindagi banata hai, Koi tumhari zindagi bigadta hai, Jo dono karta hai, wo hota hai Dost,",
        // "Ek Tere Siwa Hum Kisi Aur Ke Kaise Ho Sakte Hai, Tu Khud Hi Soch Ke Bata Tere Jaisa Aur Koi Hai Kiya. ",
        // "lTum waqt ke saath dhalne ke liye nahi, Tum waqt ko badalne ke liye bane ho. ",
        
        // "Koi tumhari zindagi banata hai, Koi tumhari zindagi bigadta hai, Jo dono karta hai, wo hota hai Dost,",
        // "Ek Tere Siwa Hum Kisi Aur Ke Kaise Ho Sakte Hai, Tu Khud Hi Soch Ke Bata Tere Jaisa Aur Koi Hai Kiya. ",
        // "lTum waqt ke saath dhalne ke liye nahi, Tum waqt ko badalne ke liye bane ho. ",
        
        // "Koi tumhari zindagi banata hai, Koi tumhari zindagi bigadta hai, Jo dono karta hai, wo hota hai Dost,",
        // "Ek Tere Siwa Hum Kisi Aur Ke Kaise Ho Sakte Hai, Tu Khud Hi Soch Ke Bata Tere Jaisa Aur Koi Hai Kiya. ",
        // "lTum waqt ke saath dhalne ke liye nahi, Tum waqt ko badalne ke liye bane ho. ",

   
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