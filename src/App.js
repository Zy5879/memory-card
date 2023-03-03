import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";
import { useState } from "react";
import "./styles.css";

function App() {
  const [memoryImages, setMemoryImages] = useState(data);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function holdImage(id) {
    setMemoryImages((oldImage) =>
      oldImage.map((img) => {
        return img.id === id ? { ...img, isClicked: !img.isClicked } : img;
      })
    );
    generateRandomIndex();
    handleScore();
  }

  function generateRandomIndex() {
    setMemoryImages((prevImg) => prevImg.sort(() => 0.5 - Math.random()));
  }

  function handleScore() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  function resetGame() {
    setMemoryImages(data);
    if (bestScore < currentScore) {
      setBestScore(currentScore);
    } else {
      return bestScore;
    }
    setCurrentScore(0);
  }

  const memoryElements = memoryImages.map((item) => {
    return (
      <Main
        key={item.id}
        img={item.img}
        name={item.name}
        isClicked={item.isClicked}
        holdImage={() =>
          item.isClicked === true ? resetGame() : holdImage(item.id)
        }
      />
    );
  });
  return (
    <div>
      <Navbar currentScore={currentScore} bestScore={bestScore} />
      <div className="card--container">{memoryElements}</div>
    </div>
  );
}

export default App;
