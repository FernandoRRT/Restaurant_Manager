
import React, { useContext } from "react";
import { MUISwitchTheme } from "./MUISwitchTheme";
import { LanguageContext } from "../services/LanguageContainer";
import { ThemeContext } from "styled-components";

const MUISwitchDiv =({toggleTheme}) => {

    const { title } = useContext(ThemeContext);
    const dayThumb = `'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
      "#fff"
    )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>'`;
    const nightThumb = `'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
      "#fff"
    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>'`;
    const brazilFlag = `'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"%3E%3Cpath fill="%23699635" d="M61.5 26.8C59.1 12.7 46.8 2 32 2S4.9 12.7 2.5 26.8L32 12l29.5 14.8zm-59 10.4C4.9 51.3 17.2 62 32 62s27.1-10.7 29.5-24.8L32 52L2.5 37.2z"%2F%3E%3Cpath fill="%23ffe62e" d="M32 12L2.5 26.8C2.2 28.5 2 30.2 2 32s.2 3.5.5 5.2L32 52l29.5-14.8c.3-1.7.5-3.4.5-5.2s-.2-3.5-.5-5.2L32 12"%2F%3E%3Cg fill="%23428bc1"%3E%3Cpath d="M26 28.4c-3.2 0-6.2.7-8.9 1.9c-.1.6-.1 1.1-.1 1.7c0 8.3 6.7 15 15 15c5.6 0 10.5-3.1 13.1-7.6c-3.7-6.5-10.9-11-19.1-11"%2F%3E%3Cpath d="M46.8 34.4c.1-.8.2-1.6.2-2.4c0-8.3-6.7-15-15-15c-5.9 0-11 3.4-13.5 8.4c2.4-.7 4.9-1.1 7.5-1.1c8.5 0 16 4 20.8 10.1"%2F%3E%3C%2Fg%3E%3Cg fill="%23fff"%3E%3Cpath d="M26 24.3c-2.6 0-5.1.4-7.5 1.1c-.7 1.5-1.2 3.1-1.4 4.9c2.7-1.2 5.7-1.9 8.9-1.9c8.2 0 15.4 4.4 19.1 10.9c.9-1.5 1.4-3.2 1.7-4.9C42 28.3 34.5 24.3 26 24.3"%2F%3E%3Ccircle cx="22" cy="32" r="1"%2F%3E%3Ccircle cx="26" cy="38" r="1"%2F%3E%3Ccircle cx="32" cy="38" r="1"%2F%3E%3Ccircle cx="32" cy="42" r="1"%2F%3E%3Ccircle cx="40" cy="38" r="1"%2F%3E%3Ccircle cx="40" cy="42" r="1"%2F%3E%3Ccircle cx="36" cy="40" r="1"%2F%3E%3Ccircle cx="22" cy="36" r="1"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'`;
    const usFlag = `'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"%3E%3Cpath fill="%23ed4c5c" d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6h16z"%2F%3E%3Cpath fill="%23fff" d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32v4.6z"%2F%3E%3Cpath fill="%23ed4c5c" d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32v4.6z"%2F%3E%3Cpath fill="%23fff" d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32v4.6"%2F%3E%3Cpath fill="%23ed4c5c" d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32V25z"%2F%3E%3Cpath fill="%23fff" d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32v4.6"%2F%3E%3Cpath fill="%23ed4c5c" d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3c0-.8 0-1.6-.1-2.3"%2F%3E%3Cpath fill="%23fff" d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.4 3.1.7 4.6"%2F%3E%3Cpath fill="%23ed4c5c" d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6"%2F%3E%3Cpath fill="%23fff" d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6"%2F%3E%3Cpath fill="%23ed4c5c" d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6"%2F%3E%3Cpath fill="%23fff" d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6"%2F%3E%3Cpath fill="%23ed4c5c" d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7"%2F%3E%3Cpath fill="%23428bc1" d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6c-1.4 1.4-2.6 3-3.6 4.6c-.9 1.5-1.8 3-2.4 4.6c-.6 1.5-1.1 3-1.5 4.6c-.4 1.5-.6 3-.7 4.6c-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6"%2F%3E%3Cpath fill="%23fff" d="m25 3l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm20 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H15l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm12 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm2.8-14l1.2-.9l1.2.9l-.5-1.5l1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9l-.5 1.6m-8 12l1.2-.9l1.2.9l-.5-1.5l1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6l-.4 1.6"%2F%3E%3C%2Fsvg%3E'`;
    const langContext = useContext(LanguageContext);
    return(
<div>
        <MUISwitchTheme
          checked={title === "dark"}
          onChange={toggleTheme}
          ariaText="Toggle light adn dark mode"
          uncheckedthumb={dayThumb}
          checkedthumb={nightThumb}
        />
        <MUISwitchTheme
          checked={langContext.locale === "pt-BR"}
          onChange={langContext.toggleLanguage}
          ariaText="Toggle light adn dark mode"
          uncheckedthumb={usFlag}
          checkedthumb={brazilFlag}
        />
      </div>

    );
}
export { MUISwitchDiv }