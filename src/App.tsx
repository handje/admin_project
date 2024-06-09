import { GlobalStyle } from "./shared/global";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
