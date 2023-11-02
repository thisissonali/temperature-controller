import React, { useState , useEffect} from 'react'
import "./App.css";
function TempBoard() {
    const [temperature, setTemperature] = useState(1);
    const [bgColor, setColor] = useState('');
  
  useEffect(() => {
    if ( temperature > 15) {
      console.log(true);
      setColor('warm');
    } else {
      setColor('cool')
    }
    if (temperature >= 30) setTemperature(30);
    if (temperature <= 0) setTemperature(0);
  }, [temperature]); 
   return (
     <div className="docBodyParent">
       <div className="temperature-parent">
         <div className={`temperature-container ${bgColor} `}>
          <span>{temperature} &deg;C</span>
         </div>
         <div className="btns">
           <button
             className={"temperature-controller"}
             onClick={() => setTemperature((prevTemp) => prevTemp + 1)}
           >
             <span>+</span>
           </button>
           <button
             className={"temperature-controller"}
             onClick={() => setTemperature((prevTemp) => prevTemp - 1)}
           >
             <span>-</span>
           </button>
         </div>
       </div>
     </div>
   );
}

export default TempBoard
