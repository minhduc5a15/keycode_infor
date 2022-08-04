import styles from "../styles/styles";
import KeyProvider from "../context/keyprovider";
const Section = ({ children }) => {
     return (
          <KeyProvider>
               <section className={styles["page"]}>{children}</section>
          </KeyProvider>
     );
};
export default Section;
