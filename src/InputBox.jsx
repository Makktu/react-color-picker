const InputBox = ({ input, setInput }) => {
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Add Color Name"
        required
        value={input}
        setInput={setInput}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
