import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";
import { useEffect, useState } from "react";

import "./styles.css";

function App() {
  const [memoryImages, setMemoryImages] = useState(data);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function holdImage(id) {
    setMemoryImages((oldImage) =>
      oldImage.map((img) => {
        return img.id === id && img.isClicked === false
          ? { ...img, isClicked: !img.isClicked }
          : img;
      })
    );
    generateRandomIndex();
  }

  function generateRandomIndex() {
    setMemoryImages((prevImg) => prevImg.sort(() => 0.5 - Math.random()));
  }

  const memoryElements = memoryImages.map((item) => {
    return (
      <Main
        key={item.id}
        img={item.img}
        name={item.name}
        isClicked={item.isClicked}
        holdImage={() => holdImage(item.id)}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {memoryElements}
    </div>
  );
}

export default App;
