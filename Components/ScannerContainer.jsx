import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setAlertTheme,
  setAlertVisibility,
  setContactInfo,
  setPreviousPage,
  setScanViewVisible,
  setViewContact,
} from "../Redux/appSlice";
import * as SQLite from "expo-sqlite";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Box } from "@gluestack-ui/themed";
import { infoParser } from "../HelperFunctions/infoParser/infoParser";
import {
  addContact,
  createTable,
  getAllContactsAsc,
} from "../HelperFunctions/sqlHelperFunctions";
import ContactList from "./ContactList";
import PermissionLoader from "./PermissionLoader/PermissionLoader";
import Scanner from "./Scanner";
import ImageStatus from "./ImageStatus/ImageStatus";
import NavButtons from "./NavButtons";

export default ScannerContainer = () => {
  const dispatch = useDispatch();
  const scanViewVisible = useSelector(
    (state) => state.appSlice.scanViewVisible
  );
  const contactInfo = useSelector((state) => state.appSlice.contactInfo);
  const db = SQLite.openDatabase("../contacts.db");
  const [isValidQR, setIsValidQR] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [tempContactList, setTempContactList] = useState([]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    createTable(db);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getAllContactsAsc(db).then(
      (results) => {
        setTempContactList(results);
      },
      (__) => {
        alertFunction("error");
      }
    );
  }, [handleBarCodeScanned, setIsLoading]);

  if (hasPermission === false) {
    return <ImageStatus theme={"permission"} />;
  }

  if (isLoading || hasPermission === null) {
    return <PermissionLoader />;
  }

  const alertFunction = (alertMsg) => {
    dispatch(setAlertTheme(alertMsg));
    dispatch(setAlertVisibility(true));
    setTimeout(() => {
      dispatch(setAlertVisibility(false));
      dispatch(setAlertTheme(""));
    }, 2600);
  };

  const updateTempContactList = (info) => {
    tempContactList.length > 0
      ? setTempContactList(
          [...tempContactList, info].sort((a, b) =>
            a.name.localeCompare(b.name)
          )
        )
      : setTempContactList([info]);
    alertFunction("success");
  };

  const handleBarCodeScanned = ({ __, data }) => {
    if (!data || typeof data !== "string" || data.split("\n").length < 6) {
      setIsValidQR(false);
      setTimeout(() => {
        setIsValidQR(true);
      }, 2550);
      return;
    }
    dispatch(setScanViewVisible(false));
    const info = infoParser(data.split("\n"));

    const contactDoesExist = tempContactList.filter((contact) => {
      if (contact.email === info.email) return true;
    }).length;

    contactDoesExist === 0
      ? addContact({ database: db, contactDetails: info }).then(
          (results) => {
            results && updateTempContactList(info);
          },
          (__) => {
            alertFunction("errorUpload");
          }
        )
      : alertFunction("duplicate");
    dispatch(setContactInfo(info));
    dispatch(setPreviousPage(true));
    dispatch(setViewContact(true));
  };

  return (
    <Box
      height='60%'
      rounded='$lg'
      sx={styles.container}
      justifyContent='space-between'
      alignItems='center'
    >
      {!isValidQR && <ImageStatus theme={"invalidQR"} />}

      {scanViewVisible && isValidQR && (
        <Scanner
          scanCheck={!scanViewVisible}
          handleScanned={handleBarCodeScanned}
        />
      )}

      {!scanViewVisible &&
        (tempContactList.length === 0 &&
        Object.values(contactInfo).length === 0 ? (
          <ImageStatus theme={"noContacts"} />
        ) : (
          <ContactList contacts={tempContactList} />
        ))}

      <NavButtons validity={isValidQR} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  button: {
    marginTop: 0,
    margin: 30,
    marginBottom: 40,
  },
});
