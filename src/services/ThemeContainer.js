import React from "react";
//imports to theme provider. On global component have main CSS to background and default font size
import { ThemeProvider } from "styled-components";

// imports to select theme. Here is the specifics dark/ght mode colors
import { lightTheme } from "../styles/themes/light";
import { darkTheme } from "../styles/themes/dark";
// the custom hook to storage the default theme cookie
import { usePersistedState } from "../helpers/usePersistedState";
//create context allow us to access the language vars and functins in any app location without the need to pass it by props to every child component

export const ThemeModeContext = React.createContext();

const ThemeContainer = (props) => {

  // theme change functions e for storage in browser
  const [theme, setTheme] = usePersistedState("theme", "light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
      
  );
};

export default ThemeContainer;
