import colorNames from "colornames";

const InputBox = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form className="input-box" onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <br />
      <input
        autoFocus
        type="text"
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default InputBox;
