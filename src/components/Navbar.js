function Navbar(props) {
  return (
    <nav>
      <h1>Marvel Memory Game</h1>
      <ul>
        <li>Score: {props.currentScore}</li>
        <li>Best Score: {props.bestScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
