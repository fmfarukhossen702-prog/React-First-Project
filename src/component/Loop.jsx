
import LogoTicker from "./Logolop/LogoTicker";
import reactLogo from "../assets/logo-slider.png";

function Loop() {
  const logos = [
    {
      image: reactLogo,
      text: "Latest Updates",
    },
    {
      image: reactLogo,
      text: "New Announcements",
    },
    {
      image: reactLogo,
      text: "Workshop Alerts",
    },
    {
      image: reactLogo,
      text: "Live Notices",
    },
    {
      image: reactLogo,
      text: "Event Countdown",
    },
    {
      image: reactLogo,
      text: "Workshop Alerts",
    },
  ];

  return (
    <div className="bg-primary" style={{ marginTop: "0px" }}>
      <LogoTicker items={logos} speed={10} direction="left" />
    </div>
  );
}

export default Loop;
