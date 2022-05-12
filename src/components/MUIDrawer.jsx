import React, { useContext, useState } from "react";
//imports to drawner
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { getNewId } from "../helpers/getNewId";
import { SidebarItems } from "../Routes/routes";
import { UserDiv } from "./UserDiv";
import { Icon } from "@material-ui/core";
import { Box } from "@mui/system";
import { FormattedMessage } from "react-intl";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";
import { alpha } from "@mui/material/styles";
import { MUISwitchDiv } from "./MUISwitchDiv";
import { LogoutMenuIcon } from "./LogoutMenuIcon";

const MUIDrawer = () => {
  const location = window.location.pathname;
  const { title, colors } = useContext(ThemeContext);
  //functions to drawner
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <UserDiv />

      <List>
        {SidebarItems.map((item) => (
          <ListItem
            button
            key={getNewId()}
            component={Link}
            to={item.route}
            sx={{
              padding: "8px 5px",
              margin: 0,
              fontWeight: 600,
              fontSize: "18px",
              backgroundColor:
                item.route === location ? `${colors.background}` : "",
              color:
                item.route === location
                  ? `${colors.primaryText}`
                  : `${colors.secondaryText}`,
              borderLeft:
                item.route === location ? `5px solid ${colors.secondary}` : "",
              borderTopRightRadius: "25px 50%",
              borderBottomRightRadius: "25px 50%",
              "&:hover": {
                color: `${colors.primaryText}`,
                backgroundColor: `${colors.background}`,
                borderLeft: `5px solid ${colors.secondary}`,
              },
            }}
          >
            <Icon>{item.icon} </Icon>
            <FormattedMessage
              id={item.messageId}
              defaultMessage={item.defaultMessage}
            />
          </ListItem>
        ))}
        <LogoutMenuIcon />
      </List>

      <Box sx={{ textAlign: "center" }}>
        <Breakpoint small down>
          <MUISwitchDiv />
        </Breakpoint>
      </Box>
    </Box>
  );

  return (
    <>
      <MenuRoundedIcon
        onClick={toggleDrawer(true)}
        sx={{
          height: "35px",
          width: "35px",
          padding: "5px",
          color: `${colors.primaryText}`,
          borderRadius: "10px",
          backgroundColor:
            title === "light" ? "rgba(0,0,0,0.1)" : colors.secondaryText,
          "&:hover": {
            boxShadow: `${alpha(colors.secondary, 0.25)} 0 0 0 0.2rem`,
            borderColor: colors.secondary,
            backgroundColor: `${colors.primary}`,
          },
        }}
      />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: `${colors.primary}`,
            padding: "10px 30px 10px 0",
            color: `${colors.secondaryText}`,
          },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
};
export { MUIDrawer };
