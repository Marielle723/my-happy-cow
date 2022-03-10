export default function SampleNextArrow(props) {
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
        right: -15,
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
