import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from "@mui/material/Button";
import { ButtonTypes } from './interfaces/types';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
  },
});


const ButtonStyle: React.FC<ButtonTypes> = ({ text, action }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" size="large" type="submit" onClick={action}>
        {text}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonStyle