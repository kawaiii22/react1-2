import React, { useState } from 'react';

function FruitButton() {
    <h1>202230303 김도연</h1>
  const fruit = ['사과', '바나나', '오렌지'];
  const [currentFruitIndex, setCurrentFruitIndex] = useState(0);

  const handleClick = () => {
    setCurrentFruitIndex((prevIndex) => (prevIndex + 1) % fruit.length);
  };

  return (
    <div>
      <p>: {fruit[currentFruitIndex]}</p>
    </div>
  );
}

export default FruitButton;