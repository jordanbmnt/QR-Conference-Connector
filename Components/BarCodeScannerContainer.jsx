import {
  Alert,
  AlertIcon,
  AlertText,
  Box,
  Button,
  ButtonText,
  CheckCircleIcon,
  Heading,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
import UserCard from "./UserCard";
import { infoParser } from "../HelperFunctions/infoParser";

export default function BarCodeScannerContainer() {
  const [hasPermission, setHasPermission] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2600);
    const info = infoParser(data.split("\n"));
    setUserInfo(info);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Box
      height='60%'
      rounded='$lg'
      sx={{
        "@base": {
          my: "$16",
          mx: "$5",
          height: "80%",
        },
        "@lg": {
          my: "$24",
          mx: "$32",
        },
        borderWidth: "$2",
        borderColor: "$orange100",
      }}
      justifyContent='space-between'
      alignItems='center'
    >
      {alertVisible && (
        <Alert sx={{ position: "absolute" }} variant='solid' action='success'>
          <AlertIcon as={CheckCircleIcon} size='xl' mr='$3' />
          <VStack space='xs'>
            <AlertText fontWeight='$bold'>Congratulations!</AlertText>
            <AlertText>You have created a new connection 🎉</AlertText>
          </VStack>
        </Alert>
      )}
      {!scanned && (
        <Heading
          sx={{
            color: "$textLight100",
            padding: "$1.5",
            backgroundColor: "#131721",
            width: "100%",
            height: "16%",
            textAlign: "center",
            paddingTop: "$8",
            borderRadius: 9,
          }}
          size='3xl'
        >
          Scan QR Code
        </Heading>
      )}
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {scanned && (
        <Box
          height='100%'
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <UserCard userInfo={userInfo} />
          <Button onPress={() => setScanned(false)}>
            <ButtonText>Tap to Scan Again</ButtonText>
          </Button>
        </Box>
      )}
    </Box>
  );
}
