import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     body {
          background: ${({ theme }) => theme.background};
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: 0.3s ease-in-out;
     }
     `;
