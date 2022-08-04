import styled from "styled-components";
import styles from "../../styles/styles";
const KeyCodeText = styled.div`
     width: 500px;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     letter-spacing: 1px;
     & > span {
          width: auto;
          transition: 0.3s ease-in-out;
          font-size: 14.5rem;
          color: ${({ theme }) => theme.text};
          font-family: "Lato", sans-serif;
     }
     @media (max-width: 450px) {
          & > span {
               font-size: 11.5rem;
          }
`;
const KeyCode = ({ keyCode }) => {
     return (
          <div className={styles["keycode-box"]}>
               <KeyCodeText>
                    <span>{keyCode}</span>
               </KeyCodeText>
          </div>
     );
};
export default KeyCode;
