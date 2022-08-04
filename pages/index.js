import { useContext, useState } from "react";
import Box from "../components/head/head";
import { KeyContext } from "../context/keyprovider";
import KeyInfo from "../components/key/keyinfo";
import Text from "../components/text/text";
import Toggle from "../components/theme/toggle";
import { GlobalStyles } from "../components/theme/global";
import { lightTheme, darkTheme } from "../components/theme/theme";
import { ThemeProvider } from "styled-components";
const Home = () => {
     const [theme, setTheme] = useState("light");
     const toggleTheme = () => {
          setTheme(theme === "light" ? "dark" : "light");
     };
     const { isPress } = useContext(KeyContext);
     return (
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
               <Box />
               {isPress ? <KeyInfo /> : <Text />}
               <Toggle toggleTheme={toggleTheme} theme={theme} />
               <GlobalStyles />
          </ThemeProvider>
     );
};
export default Home;
