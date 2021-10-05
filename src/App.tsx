import { Grid, Input, Paper, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#60E1E0",
      contrastText: "#34435e",
    },
    secondary: {
      main: "#6369D1",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4"> Currency Converter </Typography>

        <Paper>
          <Input />
        </Paper>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
