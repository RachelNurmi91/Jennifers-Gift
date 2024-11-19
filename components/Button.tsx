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

interface ButtonProps {
  text: string;
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonStyle: React.FC<ButtonProps> = ({ text, action }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" size="large" type="submit" onClick={action}>
        {text}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonStyle