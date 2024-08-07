import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
