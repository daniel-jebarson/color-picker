import { useState } from "react";
import styles from "../app/color.module.css";
const ColorPicker = ({ colors }) => {
  const [select, setSelect] = useState(false);
  const [color, setColor] = useState("#264398");
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className={styles.button}
        onClick={() => setSelect(true)}
      >
        Pick a Color
      </button>
      <div className={styles.cardgroup}>
        {select
          ? colors.map((color) => {
              return (
                <div
                  className={styles.card}
                  style={{ backgroundColor: `${color}` }}
                  onClick={() => {
                    setColor(`${color}`);
                    setSelect(!select);
                  }}
                >
                  {color}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ColorPicker;
