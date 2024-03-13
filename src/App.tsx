import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./router/RootLayout";
import { theme } from "./components/themes/themes";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import fr from "src/components/languages/fr.json";
import en from "src/components/languages/en.json";

import store from "./redux/store";
const swichLanguage = true;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        messages={swichLanguage ? fr : en}
        locale={navigator.language}
      >
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
