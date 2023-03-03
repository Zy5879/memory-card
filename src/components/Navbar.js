function Navbar(props) {
  return (
    <div className="nav--info">
      <header>
        <h1 className="title">Marvel Memory Game</h1>
        <ul>
          <li className="scores">Score: {props.currentScore}</li>
          <li className="scores">Best Score: {props.bestScore}</li>
        </ul>
      </header>
      <nav>
        <p className="game--info">
          Get points by clicking on an image but don't click any more than once
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
