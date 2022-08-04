import KeyProvider from "../context/keyprovider";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps }) => {
     return (
          <KeyProvider>
               <Component {...pageProps} />
          </KeyProvider>
     );
};

export default MyApp;
