import styles from "../../styles/styles";
const Toggle = ({ toggleTheme, theme }) => {
     return (
          <button onClick={toggleTheme} className={styles["button-theme"]}>
               {theme}
          </button>
     );
};
export default Toggle;
