import { KeyContext } from "../../context/keyprovider";
import { useContext } from "react";
import styled from "styled-components";
const Button = styled.button`
     width: 450px;
     height: 90px;
     border-radius: 12px;
     outline: none;
     border: none;
     cursor: pointer;
     color: ${({ theme }) => theme.background};
     background: ${({ theme }) => theme.text};
     font-size: 1.5rem;
     font-weight: bold;
     box-shadow: 0 0 12px ${({ theme }) => theme.text};
     transition: 0.2s ease-in-out;
     @media (max-width: 450px) {
          width: 350px;
          height: 80px;
          font-size: 1.3rem;
     }
`;
const Text = () => {
     const { setKeyInfo, setIsPress } = useContext(KeyContext);
     return (
          <Button
               onClick={() => {
                    setKeyInfo({
                         keyCode: 65,
                         key: "a",
                         shiftKey: "false",
                         ctrlKey: "false",
                         altKey: "false",
                    });
                    setIsPress(true);
               }}>
               Press Any Key to get the Event Keycode Info
          </Button>
     );
};
export default Text;
