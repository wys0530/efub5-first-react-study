function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;

//Containment와 Specialization을 둘 다 사용함
//children 쓴 부분이 containment, title, background 쓴 부분이 specialization임
