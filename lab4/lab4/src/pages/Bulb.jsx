import { useState } from "react";

const bulbOn  = "https://cdn-icons-png.flaticon.com/512/2988/2988036.png";
const bulbOff = "https://cdn-icons-png.flaticon.com/512/702/702814.png";

function Bulb() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <h2>Light Bulb</h2>
      <img src={on ? bulbOn : bulbOff} alt={on ? "Bulb ON" : "Bulb OFF"} width={150} />
      <p>Bulb is {on ? "ON" : "OFF"}</p>
      <button onClick={() => setOn(!on)}>{on ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
}

export default Bulb;