import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./router/RootLayout";
import { theme } from "./components/themes/themes";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
