import React, { useEffect, useState } from "react";
import LanguageContainer from "./services/LanguageContainer";
import { BreakpointProvider } from "react-socks";
import Routes from "./Routes/routes";

import { getUserEndpoint } from "./services/backend";
import { LoginScreen } from "./pages/loginScreen/LoginScreen";
import { AuthContext } from "./services/AuthContext";

function App() {
  //This use state save the session info.
  const [user, setUser] = useState();

  //Function to destroy the session
  function onSignOut() {
    setUser(null);
  }

  //A fetch call to JSON server to create session if user is registred on database
  useEffect(() => {
    getUserEndpoint().then((res) => setUser(res), setUser(null));
  
  
  }, []);

  // If the session was created call the app components.
  if (user) {
    return (
      //The authcontext wrap all the app to get access to the user info and the logout method in any part of the application without the necessity to pass it by props.
      <AuthContext.Provider value={{ user, onSignOut }}>
        {/* Te same as above but the react-socks library is used to define endpoints to exclude components to load in small ou widers screens. This provider was used to the header memu button. It wont be processed or mounted on wider resolutions. */}
        <BreakpointProvider>
          {/*Another context wrapping all app and granting access to the dual language support as the change language method */}
          <LanguageContainer>
            {/* The react router structure. Here is where the app begins */}
            <Routes />
          </LanguageContainer>
        </BreakpointProvider>
      </AuthContext.Provider>
    );
  } else {
    return (
      //if the user session is empty, returns the login screen
      <BreakpointProvider>
        <LanguageContainer>
          <LoginScreen onSignIn={setUser} />
        </LanguageContainer>
      </BreakpointProvider>
    );
  }
}

export default App;
