import React, {useState} from "react";

function Toggle() {
  const [isOff, setisOff] = useState(false);

  function handleClick(){
    setisOff((isOff) => !isOff);
  }
   
  const color = isOff ? 'white' : 'red';

  return <button style={{backgroundColor: color}} onClick={handleClick}>{isOff? "OFF": "ON"}</button>;
}

export default Toggle;
