import { useState, useTransition } from "react";
import Slider from "./components/Slider/Slider";
import Box from "./components/Box/Box";
import styles from "./App.module.css";

const MAX_LENGTH = 3000;

function App() {
  const [multiplier, setMultiplier] = useState(1);
  const [isPending, startTransition] = useTransition();


  const handleChange = (value: number) => {
    startTransition(() => {
      setMultiplier(value);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider onChange={handleChange} min={1} max={10} />
      </div>
      <div className={styles.boxesContainer}>
        {isPending ? (
          <>Loading...</>
        ) : (
          [...Array(MAX_LENGTH)].map((_,index) => <Box value={index * multiplier} key={index} />)
         )}
      </div>
    </div>
  );
}

export default App;
