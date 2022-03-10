export default function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#7c4ec4",
        padding: 15,
        zIndex: 3,
        top: 130,
        left: -15,
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
