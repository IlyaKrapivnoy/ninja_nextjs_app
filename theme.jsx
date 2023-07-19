import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#272d2d'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        }
    }
});
export default theme;
