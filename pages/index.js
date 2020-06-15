import { useState, useEffect } from 'react';

const Home = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const checkKey = e => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
      if (y > 0) {
        setY(y - 10)
      }
    }
    else if (e.key === 'ArrowDown') {
      setY(y + 10)
    }
    else if (e.key === 'ArrowLeft') {
      setX(x + 10)
    }
    else if (e.key === 'ArrowRight') {
      if (x > 0) {
        setX(x - 10)
      }
    }
  }

  useEffect(() => {
    // check arrow key presses
    document.onkeydown = checkKey;
  })

  return (
    <p style={{fontSize: '30px', position: 'fixed', right: x, top: y}}>@</p>
  );
}

export default Home;
