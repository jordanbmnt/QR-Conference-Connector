import LandingPage from "./Pages/LandingPage/LandingPage";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <LandingPage />
      <StatusBar hidden></StatusBar>
    </Provider>
  );
}
