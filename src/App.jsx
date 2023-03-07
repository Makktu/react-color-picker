import { useState } from "react";

import ValueDisplay from "./ValueDisplay";
import InputBox from "./InputBox";

const App = () => {
  const [color, setColor] = useState("");
  const [input, setInput] = useState("");
  return (
    <>
      <ValueDisplay color={color} setColor={setColor} />
      <InputBox input={input} setInput={setInput} />
    </>
  );
};

export default App;
