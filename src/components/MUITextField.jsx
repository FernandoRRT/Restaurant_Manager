import { darken, lighten } from "polished";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import styled from "styled-components";

export const MUITextfield = styled(TextField)`
  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.primaryText};
  }
  & .MuiFormLabel-root {
    color: ${({ theme }) => theme.colors.primaryText};
  }
  & .MuiFormHelperText-root {
    color: red;
  }
  & .MuiOutlinedInput-root {
    & select option {
      background-color: ${(props) =>
      props.theme.title === "light"
      ? lighten(0.25, props.theme.colors.secondary)
      : darken(0.25, props.theme.colors.secondary)};
  
  }
    & fieldset {
      border-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primaryText};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.secondary};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.secondary};
    }
    & .MuiInputBase-input {
      color: ${({ theme }) => theme.colors.primaryText};
      background-color: ${(props) =>
    props.theme.title === "light"
      ? lighten(0.35, props.theme.colors.secondary)
      : darken(0.35, props.theme.colors.secondary)};
  border-radius: 4px;
    }
  }
`;

export const MUIPlaceholder = styled(InputLabel)`
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 5px 0;
  font-size: "16px";
`;

// import TextField from "@mui/material/TextField";
// import { InputLabel } from "@mui/material";
// import { alpha, styled } from "@mui/material/styles";
// import { ThemeContext } from "styled-components";

// const { colors } = useContext(ThemeContext);

// const TextInput = styled(TextField)({
//   "& label.Mui-focused": {
//     color: colors.primaryText,
//   },
//   "& .MuiFormLabel-root": {
//     color: colors.primaryText,
//   },

//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: colors.secondary,
//       color: colors.primaryText,
//     },
//     "&:hover fieldset": {
//       borderColor: colors.secondary,
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: colors.secondary,
//     },
//     "& .MuiInputBase-input": {
//       backgroundColor: `${alpha(colors.secondary, 0.1)}`,
//       color: colors.primaryText,
//       borderRadius: '4px',
//       "&:focus": {
//         boxShadow: `${alpha(colors.secondary, 0.25)} 0 0 0 0.2rem`,
//         borderColor: colors.secondary,
//       },
//     },
//   },
// });

// const MUIpalceholder = styled(InputLabel)({
//   color: colors.primaryText,
//   margin: "5px 0",
//   fontSize: "16px",
//   whiteSpace: "unset",
// });
