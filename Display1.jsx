import styles from "./Display.module.css";

const Display1 = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        className={styles.display}
        value={displayValue}
        readOnly
      />
    </>
  );
};

export default Display1;
