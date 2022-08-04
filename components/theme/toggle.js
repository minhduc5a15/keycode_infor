import styled from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const ButtonTheme = styled(IconButton)`
     width: 80px;
     height: 40px;
     position: absolute;
     left: 0;
     top: 0;
     background: transparent;
     border-radius: 5px;
     font-size: 16px;
     border: none;
     outline: none;
     cursor: pointer;
     transition: 0.2s ease-in-out;
     z-index: 1;
     &:hover {
          background: ${({ theme }) => theme.hoverButton};
     }
     & > span {
          color: ${({ theme }) => theme.text};
     }
`;
const Toggle = ({ toggleTheme, theme }) => {
     return (
          <ButtonTheme onClick={toggleTheme}>
               <span>{theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}</span>
          </ButtonTheme>
     );
};
export default Toggle;
