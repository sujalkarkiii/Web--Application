import { useState } from "react";

function Password() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h2>Password Toggle</h2>
      <input type={visible ? "text" : "password"} defaultValue="mysecret123" />
      <button onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Password;