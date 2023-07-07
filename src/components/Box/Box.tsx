import styles from "./Box.module.css";

type Props = { value: number };

const Box = (props: Props) => {
  const { value } = props;
  return <div className={styles.box}>{value}</div>;
};

export default Box;
