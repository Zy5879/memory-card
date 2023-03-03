function Main(props) {
  return (
    <div key={props.id} className="img--bg">
      <img
        src={props.img}
        className="heroes"
        alt={props.name}
        onClick={props.holdImage}
      />
      <p className="heroes--name">{props.name}</p>
    </div>
  );
}

export default Main;
