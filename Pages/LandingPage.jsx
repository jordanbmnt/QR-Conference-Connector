import { Box } from "@gluestack-ui/themed";
import BarCodeScannerContainer from "../Components/BarCodeScannerContainer";

export default function LandingPage() {
  return (
    <Box
      style={{ height: "100%" }}
      contentContainerStyle={{ flexGrow: 1 }}
      backgroundColor='#0b0e14'
    >
      <BarCodeScannerContainer />
    </Box>
  );
}
