import { useContext } from "react";
import { KeyContext } from "../../context/keyprovider";
import KeyCode from "./keycode";
import styles from "../../styles/styles";
import styled from "styled-components";
const Card = styled.div`
     width: 315px;
     height: 390px;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     transition: 0.5s ease-in-out;
     background: ${({ theme }) => theme.text};
     border-radius: 9px;
     font-size: 1.5rem;
     font-weight: bold;
     box-shadow: 0 0 20px ${({ theme }) => theme.text}, 0 0 30px ${({ theme }) => theme.text};
     font-family: "Poppins", sans-serif;
     color: ${({ theme }) => theme.background};
     transition: 0.5s ese-in-out;
     & > div > div:hover {
          background: ${({ theme }) => theme.hover};
     }
     @media (max-width: 450px) {
          width: 250px;
          height: 325px;
     }
`;
const KeyInfo = () => {
     const { keyInfo } = useContext(KeyContext);
     const arr = [
          {
               name: "keyCode",
               info: keyInfo.keyCode,
          },
          {
               name: "key",
               info: keyInfo.key,
          },
          {
               name: "shiftKey",
               info: keyInfo.shiftKey,
          },
          {
               name: "ctrlKey",
               info: keyInfo.ctrlKey,
          },
          {
               name: "altKey",
               info: keyInfo.altKey,
          },
     ];
     return (
          <div className={styles["keycode-container"]}>
               <KeyCode keyCode={keyInfo.keyCode} />
               <div className={styles["card-container"]}>
                    <Card>
                         {arr.map((item, index) => {
                              return (
                                   <div className={styles["card-item"]} key={index}>
                                        <div className={styles["card-item-box"]}>
                                             <div className={styles["card-item-name"]}>
                                                  <span>{item.name}: </span>
                                             </div>
                                             <div className={styles["card-item-info"]}>
                                                  <span>{item.info}</span>
                                             </div>
                                        </div>
                                   </div>
                              );
                         })}
                    </Card>
               </div>
          </div>
     );
};
export default KeyInfo;
