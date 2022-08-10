import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
const Link = styled(Button)`
     position: absolute;
     left: 0;
     bottom: 0;
     width: 80px;
     height: 40px;
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.text};
     transition: 0.3s ease-in-out;
     border-radius: 0;
     &:hover {
          background: ${({ theme }) => theme.hover};
          color: ${({ theme }) => theme.background};
     }
`;
const GithubLink = () => {
     return (
          <Link href="https://github.com/minhduc5a15/keycode_infor" target="_blank" >
               <GitHubIcon />
          </Link>
     );
};
export default GithubLink;
