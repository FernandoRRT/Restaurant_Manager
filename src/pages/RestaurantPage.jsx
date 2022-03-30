import { MngHeader} from "../components/Header/MngHeader";
import { MngContent } from "../components/Content/MngContent";
import { MngFooter } from "../components/Footer/MngFooter";
import { MngSidebar } from "../components/Sidebar/MngSidebar";
import { GridStructure, GridHeader, GridAside, GridMain, GridFooter } from "../styles/styledStructure";
//imports to theme provider
import  {GlobalStyles} from "../styles/global"
import { ThemeProvider } from "styled-components";
// imports to select theme
import {lightTheme} from "../styles/themes/light";
import {darkTheme} from "../styles/themes/dark";
import { usePersistedState } from "../helpers/usePersistedState";


const RestaurantPage = (props) => {
    // theme change functions e for storage in browser
    const [theme, setTheme] = usePersistedState ('theme', 'light');
    const toggleTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    //  { label: 'Monty Python and the Holy Grail', year: 1975 }

    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
      <GlobalStyles />
        <GridStructure>
          <GridAside>
            <MngSidebar />
          </GridAside>
          <GridHeader>
            <MngHeader  toggleTheme={toggleTheme} companyName={"Candy Punch"}/>
          </GridHeader>
          <GridMain>
            <MngContent />
          </GridMain>
          <GridFooter>
            <MngFooter />
          </GridFooter>
        </GridStructure>
        </ThemeProvider>
  );
};

export { RestaurantPage };

