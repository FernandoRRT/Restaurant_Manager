import React from "react";
// react intl is the multi language library
import { IntlProvider } from "react-intl";
// PortugueseBR and English files have the same structure but with different expressions in each language
import English from "../lang/en.json";
import PortuguseBR from "../lang/pt-BR.json";
// the custom hook to storage the default language cookie
import { usePersistedState } from "../helpers/usePersistedState";

//create context allow us to access the language vars and functins in any app location without the need to pass it by props to every child component
export const LanguageContext = React.createContext();

//the app default language is english
const local = "en";
let lang = English;

const LanguageContainer = (props) => {


  // theme change functions e for storage in browser
  const [theme, setTheme] = usePersistedState("theme", "light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  


  const [locale, setLocale] = usePersistedState("locale", local);
  const [messages, setMessages] = usePersistedState("language", lang);

  function toggleLanguage() {
    if (locale === "en") {
      setLocale("pt-BR");
      setMessages(PortuguseBR);
    } else {
      setLocale("en");
      setMessages(English);
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageContainer;
