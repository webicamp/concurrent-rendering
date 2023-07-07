import { useState } from "react";
import styles from "./Slider.module.css";

type Props = { min?: number; max?: number; onChange: (v: number) => void };

const Slider = (props: Props) => {
  const { min = 1, max = 10, onChange } = props;
  const [range, setRange] = useState(1);
  const handleChange = (value: number) => {
    setRange(value);
    onChange(value);
  };
  return (
    <input
      type="range"
      min={min}
      max={max}
      onChange={(e) => handleChange(parseInt(e.target.value))}
      value={range}
      className={styles.slider}
    />
  );
};

export default Slider;
