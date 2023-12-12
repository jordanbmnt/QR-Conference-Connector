import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { setupUserInfoStore } from "../Redux/store";
import { GluestackUIStyledProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export const initialState = {
  "appSlice": {
    viewContactInfo: false,
  scanViewVisible: true,
  previousPage: false,
  contactInfo: {},
  alertInfo: {
    visibility: false,
    theme: "",
  }
  },
};

export function renderWithProviders(
  ui,
  {
    preloadedState = initialState,
    store = setupUserInfoStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <GluestackUIStyledProvider config={config}>
          {children}
        </GluestackUIStyledProvider>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
