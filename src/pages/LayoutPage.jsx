import React from "react";
// components to main HTML tags
import { PageHeader } from "../components/Header/PageHeader";
import { PageFooter } from "../components/Footer/PageFooter";
import { PageSidebar } from "../components/Sidebar/PageSidebar";
// necessaries Styled to make the grid CSS structure
import {
  GridStructure,
  GridHeader,
  GridAside,
  GridMain,
  GridFooter,
} from "../styles/config/styledStructure";
//imports to theme provider. On global component have main CSS to background and default font size
import { GlobalStyles } from "../styles/config/global";
// React library to create component called in certain breakpoints
import { Breakpoint } from "react-socks";
import ThemeContainer from "../services/ThemeContainer";

const LayoutPage = (props) => {

  return (
    // to all app have access to the theme colors, we must wrap the app here. As you can see, LoginScreen.tsx isn't wrapped and out of the theme provider.
    <ThemeContainer>
       {/* here we call all the traditional CSS. The react paginate library only acept strings as classNames. On this case, here is the place to declare CSS    */}
      <GlobalStyles />
      {/* Styled CSS with the page grid structure. All they are semantic HTML tags, such as HEader, Main, Footer and Aside */}
      <GridStructure>
        <GridHeader>
          {/* The toogle theme funtion, passed by props */}
          <PageHeader/>
        </GridHeader>
        <GridAside>
          <Breakpoint medium up>
            {/* to pass the location to stylize the menu item actual location */}
            <PageSidebar history={props.history} />
          </Breakpoint>
        </GridAside>
        {/* All the pages are passed as children  */}
        <GridMain>{props.children}</GridMain>
        <GridFooter>
          <PageFooter />
        </GridFooter>
      </GridStructure>
    </ThemeContainer>
  );
};

export { LayoutPage };
