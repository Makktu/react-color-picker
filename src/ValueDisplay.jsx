const ValueDisplay = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="value-box"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? null : "white",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

ValueDisplay.defaultProps = {
  colorValue: "Empty Color Value",
};

export default ValueDisplay;
