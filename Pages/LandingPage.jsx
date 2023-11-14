import { useSelector } from "react-redux";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import ScannerContainer from "../Components/ScannerContainer";
import ContactInfoPage from "./ContactInfoPage";

export default function LandingPage() {
  const view = useSelector((state) => state.appSlice.viewContactInfo);
  const contactStateInfo = useSelector((state) => state.appSlice.contactInfo);
  return (
    <GluestackUIProvider config={config}>
      <Box
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
        backgroundColor='#0b0e14'
      >
        {!view ? (
          <ScannerContainer />
        ) : (
          <ContactInfoPage info={contactStateInfo} />
        )}
      </Box>
    </GluestackUIProvider>
  );
}
