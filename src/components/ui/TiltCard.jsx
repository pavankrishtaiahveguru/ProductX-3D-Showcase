import Tilt from "react-parallax-tilt";

const TiltCard = ({ children }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      className="rounded-xl"
    >
      <div className="bg-white shadow-lg rounded-xl p-4">{children}</div>
    </Tilt>
  );
};

export default TiltCard;
