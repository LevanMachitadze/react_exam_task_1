import { useState, useEffect } from 'react';

function App() {
  const [hungry, setHungry] = useState(0);
  const [happy, setHappy] = useState(0);
  const [clean, setclean] = useState(50);
  const [result, setResult] = useState('hungry, sad and dirty');

  const feedDog = () => {
    setHungry((prev) => prev + 20);
    setHappy((prev) => Math.floor(prev * 1.05));
    setclean((prev) => prev - 10);
  };
  const playDog = () => {
    setHappy((prev) => prev + 20);
    setHungry((prev) => Math.floor(prev / 1.15));
    setclean((prev) => Math.floor(prev / 1.16));
  };
  const cleanDog = () => {
    setclean((prev) => prev + 20);
    setHungry((prev) => Math.floor(prev / 1.1));
    setHappy((prev) => Math.floor(prev / 1.05));
  };

  useEffect(() => {
    if (hungry > 50 && happy > 50 && clean > 50) {
      setResult('feeling perfect');
    } else if (hungry > 50 && happy > 50 && clean < 50) {
      setResult('happy but dirty');
    } else if (hungry < 50 && happy > 50 && clean > 50) {
      setResult('hungry but happy');
    } else if (happy < 50) {
      setResult('so sad');
    } else if (hungry > 100 && happy > 100 && clean > 100) {
      setResult('very very very happy');
    }
  }, [hungry, happy, clean]);

  return (
    <>
      <div>
        <div>dog is: {result}</div>
        <div>
          <p>hungry lvl: {hungry}</p>
          <p>happynes lvl: {happy}</p>
          <p>clean lvl: {clean}</p>
        </div>
        <div>
          <button onClick={feedDog}>feedPet</button>
          <button onClick={playDog}>playWithPet</button>
          <button onClick={cleanDog}>cleanPet</button>
        </div>
      </div>
    </>
  );
}

export default App;
