const ValueDisplay = ({ color }) => {
  return (
    <div className="value-box">
      <div style={{ color }}>{color ? { color } : "Empty Value"}</div>
    </div>
  );
};

export default ValueDisplay;
