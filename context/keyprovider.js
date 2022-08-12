import { createContext, useEffect, useState } from "react";

export const KeyContext = createContext();
const KeyProvider = ({ children }) => {
     const [keyInfo, setKeyInfo] = useState({});
     const [isPress, setIsPress] = useState(false);
     useEffect(() => {
          document.onkeydown = (e) => {
               const key = [e.ctrlKey, e.shiftKey, e.altKey];
               setKeyInfo({
                    keyCode: e.keyCode,
                    key: e.keyCode === 32 ? "space" : e.key,
                    shiftKey: e.shiftKey.toString(),
                    ctrlKey: e.ctrlKey.toString(),
                    altKey: e.altKey.toString(),
               });
               setIsPress(true);
               for (var i = 0; i <= 222; i++) {
                    if ((key.includes(true) && e.keyCode === i) || e.keyCode === i) {
                         return false;
                    }
               }
          };
          return () => {
               document.onkeydown = null;
          };
     }, []);
     const value = {
          keyInfo,
          isPress,
          setKeyInfo,
          setIsPress,
     };
     return <KeyContext.Provider value={value}>{children}</KeyContext.Provider>;
};
export default KeyProvider;
