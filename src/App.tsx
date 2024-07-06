import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { TitleContextProvider } from "./store/TitleContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <TitleContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </TitleContextProvider>
    </>
  );
}

export default App;
