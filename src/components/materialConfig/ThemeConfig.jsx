import { createTheme } from "@mui/material";
import { grey } from '@mui/material/colors';

const ThemeConfig = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: grey[900],
      },
      secondary: {
        main: grey[100],
      },
    },
});

export default ThemeConfig;