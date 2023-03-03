function Main(props) {
  const styles = {
    color: props.isClicked ? "black" : "green",
  };
  return (
    <div key={props.id} onClick={props.holdImage} className="img--bg">
      <img src={props.img} className="heroes" alt={props.name} />
      <p style={styles}>{props.name}</p>
    </div>
  );
}

export default Main;
