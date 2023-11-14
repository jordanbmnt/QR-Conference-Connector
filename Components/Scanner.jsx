import { StyleSheet } from "react-native";
import { Box, Heading } from "@gluestack-ui/themed";
import { BarCodeScanner } from "expo-barcode-scanner";

export default Scanner = ({ scanCheck, handleScanned }) => {
  return (
    <Box sx={styles.codeScanner}>
      <Heading sx={styles.qRHeading} size='3xl'>
        Scan QR
      </Heading>
      <BarCodeScanner
        onBarCodeScanned={scanCheck ? undefined : handleScanned}
        style={[StyleSheet.absoluteFillObject, { marginBottom: 0 }]}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  qRHeading: {
    color: "$textLight100",
    padding: "$1.5",
    backgroundColor: "#131721",
    width: "100%",
    height: "16%",
    textAlign: "center",
    paddingTop: "$8",
    borderRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 1,
  },
  codeScanner: { width: "100%", height: "90%", paddingBottom: 0 },
});
