import React, {useState} from "react";

function Toggle() {
  const [isOff, setisOff] = useState(false);

  function handleClick(){
    setisOff((isOff) => !isOff);
  }

  return <button onClick={handleClick}>{isOff? "OFF": "ON"}</button>;
}

export default Toggle;
