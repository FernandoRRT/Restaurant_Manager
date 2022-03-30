import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { signInEndpoint } from "../../services/backend";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import image from "../../img/LoginBackground.jpg";

const ErrorDiv = styled.div`
  background: rgb(253, 236, 234);
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
`;

const BackgroundImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => `url(${props.bg})`};
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

const LoginDiv = styled.div`
  background: rgba(0, 0, 0, 0.7);
  background-size: cover;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 400px;
  padding: 20px;
`;

const MUITextfield = styled(TextField)`
  & label.Mui-focused {
    color: #fff;
  }
  & .MuiFormLabel-root {
    color: #fff;
  }
  & .MuiFormHelperText-root {
    color: red;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #fff;
      color: #fff;
    }
    &:hover fieldset {
      border-color: #fff;
    }
    &.Mui-focused fieldset {
      border-color: #fff;
    }
    & .MuiInputBase-input {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
    }
  }
`;



const LoginScreen = (props) => {
  const [email, setEmail] = useState("fernando@email.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState("");

  function signIn(evt) {
    evt.preventDefault();
    console.log("signIn");
    signInEndpoint(email, password).then(props.onSignIn, (e) =>
      setError("E-mail não encontrado ou senha incorreta")
    );
  }
  return (
    <BackgroundImg bg={image}>
      <LoginDiv>

      <h1>Real Chef</h1>
      <p>
        <FormattedMessage
          id="app.loginInfo"
          defaultMessage="Enter e-mail and password to enter the system. To test, use email "
        />
        <kbd>fernando@email.com</kbd> e a senha <kbd>1234</kbd>.
      </p>
      <form onSubmit={signIn}>
        <MUITextfield
          margin="normal"
          label="E-mail"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <MUITextfield
          type="password"
          margin="normal"
          label="Senha"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        {error && <ErrorDiv>{error}</ErrorDiv>}

        <Box textAlign="right" marginTop="16px">
          <Button type="submit" variant="contained" color="primary">
            Ok
          </Button>
        </Box>
      </form>
      </LoginDiv>
    </BackgroundImg>
  );
};
export { LoginScreen };
