import { GluestackUIProvider } from "@gluestack-ui/themed";
import LandingPage from "./Pages/LandingPage";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GluestackUIProvider>
      <LandingPage />
      <StatusBar hidden></StatusBar>
    </GluestackUIProvider>
  );
}
