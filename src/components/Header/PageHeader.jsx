import React from "react";
// Imports to MUi forms
import { MUISwitchDiv } from "../MUISwitchDiv";
import { MUIDrawer } from "../MUIDrawer";

// imports to set the main language
import { FormattedMessage } from "react-intl";
import { Breakpoint } from "react-socks";
import { CompanyName, HeaderEstablishment } from "../../styles/textStyles";
import { HeadDiv, HeaderContainer, IpadMiniBreakpoint } from "../../styles/divStyles";



const PageHeader = () => {

  return (
    <HeaderContainer>
      {/* 
      This react-socks breakpoint has the intention to don't allow to load the drawer in high resolutions
      But, the IPad Mini has the exact dimensions of the breakpoint and it will hide the menu icon to the IPad mini users.
      So we need to up the breakpoint and hide the drawer div with normal CSS
      */}
      <Breakpoint medium down>
        <IpadMiniBreakpoint>
          <MUIDrawer/>
        </IpadMiniBreakpoint>
      </Breakpoint>

      <HeadDiv>
        <HeaderEstablishment>
          <FormattedMessage
            id="header.establishment"
            defaultMessage="Establishment name: "
          />
        </HeaderEstablishment>
        <CompanyName> Candy Punch</CompanyName>
      </HeadDiv>
      {/* The react-socks breakpoint to dont load the swith to change the light/dark mode and the togglelanguage */}
      <Breakpoint small up>
        <MUISwitchDiv />
      </Breakpoint>
    </HeaderContainer>
  );
};

export { PageHeader };
