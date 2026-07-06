import "./LogoTicker.css";

const LogoTicker = ({ items = [], speed = 25, direction = "left" }) => {
  const loopItems = [...items, ...items];

  return (
    <div className="ticker">
      <div
        className={`ticker-track ${direction === "right" ? "right" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {loopItems.map((item, index) => (
          <div className="ticker-item" key={index}>
            <img src={item.image} alt={item.text} />

            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
