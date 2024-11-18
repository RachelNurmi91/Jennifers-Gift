import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
  },
});

const ButtonStyle = ({ text, action }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" size="large" type="submit" onClick={action}>
        {text}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonStyle