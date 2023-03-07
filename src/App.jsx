import { useState } from "react";

import ValueDisplay from "./ValueDisplay";
import InputBox from "./InputBox";

const App = () => {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <>
      <ValueDisplay
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputBox
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </>
  );
};

export default App;
